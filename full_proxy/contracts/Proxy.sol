pragma solidity ^0.5.1;

import "./Storage.sol";

contract Proxy is Storage {
    address currentAddress;

    constructor(address _currentAddress) public {
      owner = msg.sender;
      currentAddress = _currentAddress;
    }    
    function upgrade(address _newAddress) public {
      require(msg.sender == owner);
      currentAddress = _newAddress;
    }

    function () payable external {
      //redirect to currentAddress
      address implemantation = currentAddress;
      require(currentAddress != address(0));
      bytes memory data = msg.data;

      // DelegateCall every function call
      assembly {
        let result := delegatecall(gas, implemantation, add(data, 0x20), mload(data), 0, 0)
        let size := returndatasize
        let ptr := mload(0x40)
        returndatacopy(ptr, 0, size)
        switch result
        case 0 {revert(ptr, size)}
        default {return(ptr, size)}
      }
    }
}