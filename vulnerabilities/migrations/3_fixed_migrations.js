const Overflowfixed = artifacts.require('Overflowfixed')

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Overflowfixed)
}
