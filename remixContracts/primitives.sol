pragma solidity ^0.8.0;

contract Primitives {
    bool public boo = true;

    /*
    uint stands for unsigned integer, meaning non negative integers
    different sizes are available
        uint8   ranges from 0 to 2 ** 8 - 1
        uint16  ranges from 0 to 2 ** 16 - 1
        ...
        uint256 ranges from 0 to 2 ** 256 - 1
    */
    uint8 public u8 = 1;
    uint public u256 = 456;
    uint public u = 123; // uint is an alias for uint256

    /*
    Negative numbers are allowed for int types.
    Like uint, different ranges are available from int8 to int256
    
    int256 ranges from -2 ** 255 to 2 ** 255 - 1
    int128 ranges from -2 ** 127 to 2 ** 127 - 1
    */
    int8 public i8 = -1;
    int public i256 = 456;
    int public i = -123; // int is same as int256

    // minimum and maximum of integers (type().max and type().min only availible for int and uint)
    int public minInt = type(int).min;
    int public maxInt = type(int).max;    
    uint public minUint8 = type(uint8).min;
    uint public maxUint8 = type(uint8).max;    

    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    /*
    In Solidity, the data type "bytes" represent a sequence of bytes. 
    Solidity presents two type of bytes types :

     - fixed-sized byte arrays (bytes1, bytes2, ... bytesX) up to 32
     - dynamically-sized byte arrays (bytes).
    */

    // by adding "0x" prefix we forse solidity to treat this value as hexidecimal
    bytes1 public a  = 0xb5; //  [10110101]
    bytes1 public b  = 0xff; //  [11111111]
    bytes2 public c  = 0xDDBE; // [11011101, 10111110] ?
    
    function getBytesLength() view public returns (uint _length) {
        _length = a.length;
    }

    // Default values
    // There is no "undefined" or "null" values in solidity - all unassigned variables have a default value
    bool public defaultBoo; // false
    uint public defaultUint; // 0
    int public defaultInt; // 0
    address public defaultAddr; // 0x0000000000000000000000000000000000000000
}

