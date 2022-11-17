const DeFiAIFarmV2 = artifacts.require('DeFiAIFarmV2')

module.exports = function (deployer) {
  deployer.deploy(DeFiAIFarmV2, 50)
}
