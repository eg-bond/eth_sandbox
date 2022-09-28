// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract AbiDecode {   

    function encode(
        uint x,
        address addr        
    ) external pure returns (bytes memory) {
        return abi.encode(x, addr);
    }

    function decode(bytes calldata data)
        external
        pure
        returns (
            uint x,
            address addr            
        )
    {
        // second parameter in parentheses - types of encoded data
        // has to be provided in the right order
        (x, addr) = abi.decode(data, (uint, address));
    }
}