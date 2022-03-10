pragma solidity ^0.7.6;

contract Storage {
    uint256 number;

    function getNumber() internal view returns (uint){
        return number;
    }

    function setNumber(uint256 _number) internal{
        number = _number;
    }
}