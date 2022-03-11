// Simple proxy example
pragma solidity ^0.7.6;

import "./Storage.sol";
// Proxy for Dogs contract
contract ProxyDog is Storage {

    address public currentAddress;

    constructor(address _currentAddress) public {
        currentAddress = _currentAddress;
    }

    function upgrade(address _currentAddress) public {
        currentAddress = _currentAddress;
    }

    function getNumberOfDogs() public returns (bool, bytes memory){
        // delegatecall call function of external contract using
        // scope of this contract
        (bool res, bytes memory data) = currentAddress.delegatecall(abi.encodePacked(bytes4(keccak256("getNumberOfDogs()"))));
        return (res, data);
    }
    function setNumberOfDogs(uint256 _number) public returns (bool, bytes memory){
        (bool res, bytes memory data) = currentAddress.delegatecall(abi.encodePacked(bytes4(keccak256("setNumberOfDogs(uint256)")), _number));
        return (res, data);
    }
}