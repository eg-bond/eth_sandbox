pragma solidity ^0.8.13;

contract Units {
    // Ether units
    // A literal number can take a suffix of wei, gwei or ether to specify
    // a subdenomination of Ether, where Ether numbers without a postfix are assumed to be Wei.

    uint public oneWei = 1 wei;
    // 1 wei is equal to 1
    bool public isOneWei = 1 wei == 1;

    uint public oneGwei = 1 gwei;
    // 1 gwei is equal to 10^9 wei
    bool public isOneGwei = 1 gwei == 1e9;

    uint public oneEther = 1 ether;
    // 1 ether is equal to 10^18 wei
    bool public isOneEther = 1 ether == 1e18;
    //---------------------------------------------------------------

    // Time units
    // Suffixes like seconds, minutes, hours, days and weeks after literal numbers can be 
    // used to specify units of time where seconds are the base unit

    uint public oneSecond = 1 seconds;
    // 1 minutes is equal to 1
    bool public isOneSecond = oneSecond == 1;

    uint public oneMinute = 1 minutes;
    // 1 minutes is equal to 60
    bool public isOneMinute = 1 minutes == 60 seconds;

    uint public oneHour = 1 hours; // 3600
    uint public oneDay = 1 days; // 86400
    uint public oneWeek = 1 weeks; // 604800

    function someFunc()
        public
        pure
        returns (uint, bool)
    {        

        (uint one, bool some) = (1, true);
        return (one, some);
    }
}