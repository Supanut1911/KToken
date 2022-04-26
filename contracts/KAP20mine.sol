//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./KAP20Token.sol";
import "./time/TimeCounter.sol";

contract KAP20mine is KAP20Token{
  uint public faucetRate;
  uint public maxELap;

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
    require(maxELap > 0, "maxLap need more than 0");

    faucetRate = faucetRate_;
    maxELap = maxELap_;
    counter = TimeCounter(counter_);
  }


  function miningReward() public view returns (uint256) {
    return miningRewardInternal(msg.sender);
  }

  function miningRewardInternal(address user) internal view returns (uint256) {
      uint256 actualElap = counter.getElapsedTimeOf(user);
      uint256 elap = actualElap > maxELap
          ? maxELap
          : actualElap;
      return (faucetRate * elap) / maxELap;
  }

  function mine() public {
      _mint(msg.sender, miningReward());
      counter.stampLastAction(msg.sender);
  }

  function mineBKNext(address bkNextAddr) public onlySuperAdmin {
      _mint(bkNextAddr, miningRewardInternal(bkNextAddr));
      counter.stampLastAction(bkNextAddr);
  }
}