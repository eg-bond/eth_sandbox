pragma solidity ^0.8.0;

interface IdefiAi {
    function getTotalBalance(uint256 _pid, address _user) external view returns (uint256);
    function deposit(uint256 _pid, uint256 _wantAmt) external;
    function withdraw(uint256 _pid, uint256 _wantAmt) external;
}
