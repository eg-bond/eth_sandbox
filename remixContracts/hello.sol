pragma solidity ^0.8.0;

contract HelloWorld {
    string message = "hello world";
    function setMessage(string memory newMessage) public {
      message = newMessage;
    }
    function hello() public view returns (string memory) {
      return message;
    }  
}