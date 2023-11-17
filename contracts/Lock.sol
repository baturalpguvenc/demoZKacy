// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract DemoZKacy {
    uint256 public secretNumber = 42;

    function proveKnowledge(uint256 _guessedNumber) public view returns (bool) {
        return _guessedNumber == secretNumber;
    }
}

