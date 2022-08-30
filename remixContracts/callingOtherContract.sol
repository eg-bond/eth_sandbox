// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Callee {
    uint public x;    

    function setX(uint _x) public returns (uint) {
        x = _x;
        return x;
    }
    
}

interface CalleeI { 
    function setX(uint _x) external returns (uint);    
}

contract Caller {
    uint public x;

    // preferable way to call contract functions
    function setX(Callee _callee, uint _x) public { 
        // Calle storage is set, Caller is not modified.       
        _callee.setX(_x);
    }

    // does the same as function above
    function setXFromAddress(address _addr, uint _x) public {
        Callee callee = Callee(_addr);
        callee.setX(_x);
    }

    function setXviaInterface(CalleeI _callee, uint _x) public { 
        // Calle storage is set, Caller is not modified.       
        _callee.setX(_x);
    }

    
    function setXCall(address _callee, uint _x) public {
        // Calle storage is set, Caller is not modified.
        (bool success, bytes memory data) = _callee.call(
            abi.encodeWithSignature("setX(uint256)", _x)
        );
    }

    function setXDelegateCall(address _callee, uint _x) public {
        // Caller storage is set, Calee is not modified.
        (bool success, bytes memory data) = _callee.delegatecall(
            abi.encodeWithSignature("setX(uint256)", _x)
        );
    }    
}