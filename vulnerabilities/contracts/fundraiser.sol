pragma solidity ^0.4.8;

//Insecure code
contract Fundraiser {
  mapping (address => uint) private balances;

  function contribute() payable public{
    balances[msg.sender] += msg.value;
  }

  function withdraw() public {
    if(balances[msg.sender] == 0) {
      throw;
    }

    if(msg.sender.call.value(balances[msg.sender])()){
      balances[msg.sender] = 0;
    } else {
      throw;
    }    
  }

  function getFunds() returns (uint) {
    return address(this).balance;
  }
}




