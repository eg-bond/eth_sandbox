// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SomeExternalContract {    
    function showNumber(uint num) public pure returns (uint) {
        return num;
    }
}

// first 4 bytes of calldata specifies which function to call. It's called function selector

contract FunctionSelector {    
    // function below will return: 0x27c144490000000000000000000000000000000000000000000000000000000000000009
    // where: 0x27c14449 is a function selector
    // 0000000000000000000000000000000000000000000000000000000000000009 is function argument in 32 byte form
    function showNumber(uint num) public pure returns (bytes calldata) {
        return msg.data;
    } 

    // Here is how the function selector is computed:
    // if we pass "showNumber(uint256)" to this function, it will return 0x27c14449  
    function getSelectorFromString(string calldata _funcStr) external pure returns (bytes4) {
        return bytes4(keccak256(bytes(_funcStr)));
    }
    // string representation of function ("showNumber(uint256)") is called function signature

    // it's also possible to retrieve function selector from another contracts type
    function getSelectorFromContractType() external pure returns (bytes4) {        
        return SomeExternalContract.showNumber.selector; //0x27c14449 

        //It doesn't work with current contract type (why?):
        // return FunctionSelector.showNumber.selector;
    }
}