pragma solidity ^0.7.6;

import "./Storage.sol";

contract Dogs is Storage {

    function getNumberOfDogs() public view returns(uint256) {
        return Storage.getNumber();
    }

    function setNumberOfDogs(uint256 toSet) public {
        Storage.setNumber(toSet);
    }
}