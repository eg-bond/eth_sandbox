pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20Capped, Ownable {
  constructor() ERC20("MyToken", "MTKN") ERC20Capped(10000) {
    _mint(msg.sender, 10000);
  }  
}