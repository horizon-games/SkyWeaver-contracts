pragma solidity ^0.6.8;
pragma experimental ABIEncoderV2;

import "../utils/TieredOwnable.sol";
import "../interfaces/ISkyweaverAssets.sol";
import "multi-token-standard/contracts/utils/SafeMath.sol";
import "multi-token-standard/contracts/interfaces/IERC165.sol";
import "multi-token-standard/contracts/interfaces/IERC1155.sol";
import "multi-token-standard/contracts/interfaces/IERC1155TokenReceiver.sol";

/**
 * This is a contract allowing contract owner to mint up to N assets per
 * 6 hours. Anyone can send SW assets or ARC to this contract, which will
 * then get burned for the former and reserved for Horizon for the latter.
 * Most of the logic for what to mint and what is considered a valid burn
 * is kept off-chain, in a L2 network.
 */
contract BridgeFactory is IERC1155TokenReceiver, TieredOwnable {
  using SafeMath for uint256;

  /***********************************|
  |             Variables             |
  |__________________________________*/

  // Token information
  ISkyweaverAssets internal skyweaverAssets; // ERC-1155 Skyweaver assets contract
  IERC1155 internal arcadeumCoin;            // ERC-1155 Arcadeum Coin contract
  uint256 internal arcadeumCoinID;           // ID of ARC token in respective ERC-1155 contract

  // Bridge state
  struct State {
    uint32 period;
    uint112 availableSupply;
    uint112 periodMintLimit;
  }

  // Bridge variables
  State internal state;
  uint256 constant internal PERIOD_LENGTH = 6 hours; // Length of each mint periods

  event PeriodMintLimitChanged(uint256 oldMintingLimit, uint256 newMintingLimit);

  /***********************************|
  |            Constructor            |
  |__________________________________*/

  /**
   * @notice Create factory, link skyweaver assets and store initial parameters
   * @param _assetsAddr       The address of the ERC-1155 Assets Token contract
   * @param _arcadeumCoinAddr The address of the arcadeum coin contract
   * @param _arcadeumCoinID   The ID of the arcadeum coin
   * @param _periodMintLimit  Can only mint N assets per period
   */
  constructor(
    address _assetsAddr,
    address _arcadeumCoinAddr,
    uint256 _arcadeumCoinID,
    uint112 _periodMintLimit
  ) public {
    require(
      _assetsAddr != address(0) &&
      _arcadeumCoinAddr != address(0) && 
      _periodMintLimit > 0,
      "BridgeFactory#constructor: INVALID_INPUT"
    );

    // Assets
    skyweaverAssets = ISkyweaverAssets(_assetsAddr);
    arcadeumCoin = IERC1155(_arcadeumCoinAddr);
    arcadeumCoinID = _arcadeumCoinID;

    // Set current period
    state.period = livePeriod();
    state.availableSupply = _periodMintLimit;

    // Rewards parameters
    state.periodMintLimit = _periodMintLimit;
    emit PeriodMintLimitChanged(0, _periodMintLimit);
  }


  /***********************************|
  |         Management Methods        |
  |__________________________________*/

  /**
   * @notice Will update the daily mint limit
   * @dev This change will take effect immediatly once executed
   * @param _newPeriodMintLimit Amount of assets that can be minted within 24h
   */
  function updatePeriodMintLimit(uint112 _newPeriodMintLimit) external onlyOwnerTier(HIGHEST_OWNER_TIER) {
    // Immediately update supply instead of waiting for next period
    if (state.availableSupply > _newPeriodMintLimit) {
      state.availableSupply = _newPeriodMintLimit;
    }

    emit PeriodMintLimitChanged(state.periodMintLimit, _newPeriodMintLimit);
    state.periodMintLimit = _newPeriodMintLimit;
  }

  /**
   * @notice Send current ARC balance of conquest contract to recipient
   * @param _recipient Address where the currency will be sent to
   * @param _data      Data to pass with transfer function
   */
  function withdraw(address _recipient, bytes calldata _data) external onlyOwnerTier(HIGHEST_OWNER_TIER) {
    require(_recipient != address(0x0), "BridgeFactory#withdraw: INVALID_RECIPIENT");
    uint256 thisBalance = arcadeumCoin.balanceOf(address(this), arcadeumCoinID);
    arcadeumCoin.safeTransferFrom(address(this), _recipient, arcadeumCoinID, thisBalance, _data);
  }


  /***********************************|
  |      Receiver Method Handler      |
  |__________________________________*/

  /**
   * @notice Prevents receiving Ether or calls to unsuported methods
   */
  fallback () external {
    revert("BridgeFactory#_: UNSUPPORTED_METHOD");
  }

  /**
   * @notice Burns SW asset when received, or store ARC
   * @dev Make sure to send the right assets and the correct amount 
   *      as it's not validated in this contract.
   * @param _id      Id of Token being transferred
   * @param _amount  Amount of Token _id being transferred
   */
  function onERC1155Received(
    address, // _operator
    address, // _from 
    uint256 _id, 
    uint256 _amount, 
    bytes memory // _data
  )
    public override returns(bytes4)
  {
    if (msg.sender == address(arcadeumCoin)) {
      // Do nothing, just store the ARC until withdrawl
      require(_id == arcadeumCoinID, "BridgeFactory#onERC1155Received: INVALID_ARC_ID");

    } else if (msg.sender == address(skyweaverAssets)) {
      // Burn asset received
      skyweaverAssets.burn(_id, _amount);

    } else {
      revert("BridgeFactory#onERC1155Received: INVALID_TOKEN");
    }

    return IERC1155TokenReceiver.onERC1155Received.selector;
  }

  /**
   * @notice Burns SW assets when received, or store ARC
   * @dev Make sure to send the right assets and the correct amount 
   *      as it's not validated in this contract.
   * @param _ids     An array containing ids of each Token being transferred
   * @param _amounts An array containing amounts of each Token being transferred
   */
  function onERC1155BatchReceived(
    address, // _operator
    address, // _from
    uint256[] memory _ids,
    uint256[] memory _amounts,
    bytes memory // _data
  )
    public override returns(bytes4)
  {
    if (msg.sender == address(skyweaverAssets)) {
      // Burn assets received
      skyweaverAssets.batchBurn(_ids, _amounts);

    // Arc tribute
    } else if (msg.sender == address(arcadeumCoin)) {
      // Do nothing, just store the ARC until withdrawl
      require(_ids[0] == arcadeumCoinID, "BridgeFactory#onERC1155BatchReceived: INVALID_ARC_ID");
      require(_ids.length == 1, "BridgeFactory#onERC1155BatchReceived: INVALID_ARRAY_LENGTH");

    } else {
      revert("BridgeFactory#onERC1155BatchReceived: INVALID_TOKEN");
    }

    return IERC1155TokenReceiver.onERC1155BatchReceived.selector;
  }


  /***********************************|
  |         Minting Functions         |
  |__________________________________*/

  /**
   * @notice Will mint tokens to user
   * @dev Can only mint up to the dailyLimit in a given day
   * @param _to      The address that receives the assets
   * @param _ids     Array of Tokens ID that are minted
   * @param _amounts Amount of Tokens id minted for each corresponding Token id in _tokenIds
   */
  function batchMint(address _to, uint256[] calldata _ids, uint256[] calldata _amounts)
    external onlyOwnerTier(1)
  {
    // Get current period and current available supply
    uint32 live_period = livePeriod();
    uint256 available_supply;

    // Check if new period
    if (live_period == state.period) {
      available_supply = state.availableSupply;
    } else {
      available_supply = state.periodMintLimit;
    }

    // Count total amount to mint
    for (uint256 i = 0; i < _ids.length; i++) {
      available_supply = available_supply.sub(_amounts[i]);
    }

    // Store available supply
    state.period = live_period; 
    state.availableSupply = uint112(available_supply);

    // Mint assets
    skyweaverAssets.batchMint(_to, _ids, _amounts, "");
  }


  /***********************************|
  |         Getter Functions          |
  |__________________________________*/

  /**
   * @notice Returns the address of the factory manager contract
   */
  function getSkyweaverAssets() external view returns (address) {
    return address(skyweaverAssets);
  }

  /**
   * @notice Returns the daily minting limit
   */
  function getPeriodMintLimit() external view returns (uint112) {
    return state.periodMintLimit;
  }

  /**
   * @notice Returns how many cards can currently be minted by this factory
   */
  function getAvailableSupply() external view returns (uint112) {
    return livePeriod() == state.period ? state.availableSupply : state.periodMintLimit;
  }

  /***********************************|
  |         Utility Functions         |
  |__________________________________*/

  /**
   * @notice Calculate the current period
   */
  function livePeriod() public view returns (uint32) {
    return uint32(now / PERIOD_LENGTH);
  }

  /**
   * @notice Indicates whether a contract implements the `ERC1155TokenReceiver` functions and so can accept ERC1155 token types.
   * @param  interfaceID The ERC-165 interface ID that is queried for support.s
   * @dev This function MUST return true if it implements the ERC1155TokenReceiver interface and ERC-165 interface.
   *      This function MUST NOT consume more than 5,000 gas.
   * @return Wheter ERC-165 or ERC1155TokenReceiver interfaces are supported.
   */
  function supportsInterface(bytes4 interfaceID) external pure returns (bool) {
    return  interfaceID == type(IERC165).interfaceId || 
      interfaceID == type(IERC1155TokenReceiver).interfaceId;
  }
}
