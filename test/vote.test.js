const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DemoZKacy", function () {
    it("should prove knowledge", async function () {
        const DemoZKacy = await ethers.getContractFactory("DemoZKacy");
        const demoZKacy = await DemoZKacy.deploy();

        await demoZKacy.deployed();
        const result = await demoZKacy.proveKnowledge(42);

        expect(result).to.equal(true);
    });
});