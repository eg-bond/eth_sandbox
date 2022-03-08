const Wallet = artifacts.require('Wallet')

module.exports = function (deployer) {
  deployer.deploy(
    Wallet,
    [
      '0xfd7D00a83290aDFfA762366dBde8Ef84138a0085',
      '0xa307B217539e2877F5dF35E4231f42C97b7306d8',
      '0x176950E866E79aa1A8CAc693FaC6605a81Def307',
    ],
    2
  )
}
