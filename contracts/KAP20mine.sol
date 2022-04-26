//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./KAP20Token.sol";
import "./time/TimeCounter.sol";

contract KAP20mine is KAP20Token{
  uint public faucetRate;
  uint public maxLap;

  TimeCounter public counter;

  constructor(
    string memory name_,
    string memory symbol_,
    uint8 _decimals,
    address committee_,
    address adminRouter_,
    address kyc_,
    uint256 acceptedKycLevel_,
    uint256 faucetRate_,
    uint256 maxELap_,
    address counter_
  ) KAP20Token(name_, symbol_, _decimals, committee_, adminRouter_, kyc_, acceptedKycLevel_) {
    require(faucetRate > 0, "amount faucet need more than 0");
    require(maxLap > 0, "maxLap need more than 0");

    faucetRate = faucetRate_;
    maxLap = maxELap_;
    counter = TimeCounter(counter_);
  }


  function miningReward() public view returns (uint256) {
    return miningRewardInternal(msg.sender);
  }

  function getMiningRewardInternal(address user) internal view returns (uint256) {
      uint256 actualElap = counter.getElapsedTimeOf(user);
      uint256 elap = actualElapsed > maxELap_
          ? maxELap_
          : actualElap;
      return (faucetRate * elap) / maxELap_;
  }

  function mine() public {
      _mint(msg.sender, getMiningReward());
      counter.stampLastAction(msg.sender);
  }

  function mineBKNext(address bkNextAddr) public onlySuperAdmin {
      _mint(bkNextAddr, getMiningRewardInternal(bkNextAddr));
      counter.stampLastAction(bkNextAddr);
  }
}