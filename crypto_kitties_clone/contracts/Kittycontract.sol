pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract Kittycontract is ERC721("CryptoKittiesClone", "CKC"), Ownable {
  struct Kitty {
    uint256 genes;
    uint64 birthTime;
    uint32 mumId;
    uint32 dadId;
    uint16 generation;
  }
  
  Kitty[] kitties;

  function totalSupply() view public returns (uint) {
    return kitties.length;
  }  

  function getKitty(uint id) public view returns (Kitty memory) {
    return kitties[id];
  }

  uint public constant CREATION_LIMIT_GEN0 = 10;
  uint public gen0Counter;

  event Birth(
    uint256 _mumId,
    uint256 _dadId,
    uint256 _generation,
    uint256 _genes,
    address _owner
  );

  function createKittyGen0(uint256 _genes) public onlyOwner {
    require(gen0Counter < CREATION_LIMIT_GEN0, 'Amount of first generation kitties is exceeded');
    gen0Counter++;
    // Gen0 have to be owned by the contract
    _createKitty(0, 0, 0, _genes, msg.sender);
  }

  function _createKitty(
    uint256 _mumId,
    uint256 _dadId,
    uint256 _generation,
    uint256 _genes,
    address _owner
  ) private returns (uint256) {
    Kitty memory _kitty = Kitty({
      genes: _genes,
      birthTime: uint64(block.timestamp),
      mumId: uint32(_mumId),
      dadId: uint32(_dadId),
      generation: uint16(_generation)
    });

    kitties.push(_kitty);
    uint256 newKittenId = kitties.length - 1;

    _safeMint(_owner, newKittenId);
    emit Birth(_mumId, _dadId, _generation, _genes, _owner);
    
    return newKittenId;
  }
}