pragma solidity 0.8.12;

contract HelloWorld {
    string message = "hello world";
    function setMessage(string memory newMessage) public payable {
      message = newMessage;
    }
    function hello() public view returns (string memory) {
      return message;
    }
}