// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// Interface restrictions:
// - cannot have any functions implemented
// - can inherit from other interfaces
// - all declared functions must be external
// - cannot declare a constructor
// - cannot declare state variables

interface ICounter {
    function count() external view returns (uint);

    event Incremented(uint newCount);

    function increment() external;
}

// by inheriting from interface we require from contract to implement interface functions
contract Counter1 is ICounter {
    // solidity creates a getter for every public variable, so it's basicly the same as decalre "function count()"
    uint public count;    
    
    function increment() public {
        count += 1;
        // it is't necessary to use interface event - there will be no warning about it.
        emit Incremented(count);
    }
}

// every contract with at least one unimplemented function has to be declared as absctract
abstract contract CounterAbstract {
    int public count;  

    constructor(int initialValue){
        count = initialValue;
    }  
    
    function increment() external {
        count += 1;
    }

    function decrement() external {
        count -= 1;
    }

    function changeCount(int newCount) virtual external;    
}

// when we inherit from an abstract contracts it works as interface - forses contract to implement unimplemented logic
// but it can be much more useful because it alows us to declare variables, constructor, etc.
contract Counter2 is CounterAbstract(10) {
    function changeCount(int newCount) override external {
        count = newCount;
    }
}

// won't compile because we didn't initialize constructor:
// contract Counter3 is CounterAbstract {
//     function changeCount(int newCount) override external {
//         count = newCount;
//     }
// }