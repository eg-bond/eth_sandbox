pragma solidity ^0.8.0;

// constanst and immutable variables consume much less gas

contract Constants {
    // coding convention to uppercase constant variables
    // constant variables has to be assigned where it is declared
    address public constant MY_ADDRESS = 0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc;
    uint public constant MY_UINT = 123;
}

contract Immutable {
    // coding convention to uppercase constant variables
    // immutable variables can be assigned in the constructor..
    address public immutable MY_ADDRESS;
    // ..or immediately
    uint public immutable MY_UINT = 16;
    
    constructor() {
        MY_ADDRESS = msg.sender;
    }    
}