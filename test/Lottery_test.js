const { expect } = require('chai')
const web3 = require('web3')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised).should()
const BN = require('bn.js')
const skipIf = require('mocha-skip-if')
chai.use(require('chai-bn')(BN))
const fs = require('fs')
const { deployments, getChainId } = require('hardhat')
const { networkConfig, developmentChains } = require('../helper-hardhat-config')

skip.if(!developmentChains.includes(network.name)).
  describe('Lottery Unit Tests', async function () {
    let contract;

    beforeEach(async () => {
      await deployments.fixture(['lottery']);
      const Lottery = await deployments.get("Lottery");
      contract = await ethers.getContractAt("Lottery", Lottery.address);
    })

    describe('deployment', async () => {
      it('deploys successfully', async () => {
        const address = contract.address;
        expect(address).to.not.eql(0x0);
        expect(address).to.not.be.empty;
        expect(address).to.not.be.null;
        expect(address).to.not.be.undefined;
      })
    })

  })
