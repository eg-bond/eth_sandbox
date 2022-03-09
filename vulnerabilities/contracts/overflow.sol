pragma solidity ^0.7.6;

// vulnerable to batchOverflow error
contract Overflow {
  
  mapping (address=>uint) balances;

  function contribute() payable public{
    // 1 wei = 1 token
    balances[msg.sender] = msg.value;
  }

  function getBalance() public view returns (uint) {
    return balances[msg.sender];
  }

  function batchSend(address[] memory _receivers, uint _value) public {
    // this line overflows
    uint total = _receivers.length * _value;
    // this check is worthless if total is owerflown (total == 0)
    require(balances[msg.sender] >= total);

    balances[msg.sender] = balances[msg.sender] - total;

    for (uint256 i = 0; i < _receivers.length; i++) {
      balances[_receivers[i]] = balances[_receivers[i]] + _value;
    }
  }
}

// custom SafeMath
library SafeMath {

  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a * b;
    assert(a == 0 || c / a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    //assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}

// not vulnerable to batchOverflow error
contract Overflowfixed {
  using SafeMath for uint256;
  
  mapping (address=>uint) balances;

  function contribute() payable public{
    // 1 wei = 1 token
    balances[msg.sender] = msg.value;
  }

  function getBalance() public view returns (uint) {
    return balances[msg.sender];
  }

  function batchSend(address[] memory _receivers, uint _value) public {   
    uint total = _receivers.length.mul(_value);
    require(balances[msg.sender] >= total);

    balances[msg.sender] = balances[msg.sender].sub(total);

    for (uint256 i = 0; i < _receivers.length; i++) {
      balances[_receivers[i]] = balances[_receivers[i]].add(_value);
    }
  }
}

