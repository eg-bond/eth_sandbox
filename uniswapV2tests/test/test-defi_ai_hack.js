const IERC20 = artifacts.require('IERC20')
const DeFiAI = artifacts.require('DeFiAIFarmV2')
const IDeFiAI = artifacts.require('IdefiAi')

contract('DEFI_AI_FARM', accounts => {
  const BUSD = '0x55d398326f99059fF775485246999027B3197955' //want
  const BUSD_WHALE = '0xf89d7b9c864f589bbf53a82105107622b35eaa40'
  const FARM_ADDR = '0x6548a320d3736920CaD8a2cfbFEfDb14dB6376eA'

  const STRAT = '0x042A97C650aff20e4c8C62CD3E0513fc9fcDf722'
  const MIN_FEE = 50

  const HACKER_WALLET_ADDR = '0x1bbA5E6dEd13785d173484267cDbf35Ca6C08F66'

  it.skip('getTotalBalance works properly', async () => {
    const busd = await IERC20.at(BUSD)
    const farm = await IDeFiAI.at(FARM_ADDR)

    // const farm = await DeFiAI.deployed()
    // await farm.initialize(BUSD, STRAT, MIN_FEE)

    await busd.approve(FARM_ADDR, 2000000000000000, { from: BUSD_WHALE })
    const allowed = await busd.allowance(BUSD_WHALE, FARM_ADDR)
    console.log(`allowed: ${allowed}`)

    await farm.deposit(0, 50000000, { from: BUSD_WHALE })
    let whaleBalance = await farm.getTotalBalance(0, BUSD_WHALE)
    console.log(`whale bal in strat: ${whaleBalance}`)

    let hackerBalance = await farm.getTotalBalance(0, HACKER_WALLET_ADDR)
    console.log(`hacker bal in strat: ${hackerBalance}`)

    const stratBalance = await busd.balanceOf(STRAT)
    console.log(`strat balance: ${stratBalance}`)
  })

  it('withdrawal can be hacked', async () => {
    const busd = await IERC20.at(BUSD)
    const farm = await IDeFiAI.at(FARM_ADDR)

    const stratBalanceB = await busd.balanceOf(STRAT)
    console.log(`strat balance before: ${stratBalanceB}`)

    let hackerBalance = await farm.getTotalBalance(
      0,
      '0xd88E75b4f3A869B0b56d34f2364dfCe26386a00C'
    )
    console.log(`hacker bal: ${hackerBalance}`)

    await farm.withdraw(0, '50000000000000000000000', {
      from: '0xd88E75b4f3A869B0b56d34f2364dfCe26386a00C',
    })

    const stratBalanceA = await busd.balanceOf(STRAT)
    console.log(`strat balance after: ${stratBalanceA}`)

    const hackerBUSD = await busd.balanceOf(
      '0xd88E75b4f3A869B0b56d34f2364dfCe26386a00C'
    )
    console.log(`hacker BUSD balance after hack: ${hackerBUSD}`)
  })

  it.skip('allowances for hacker addresses was set initially (inside hack)', async () => {
    // need to fork mainnet from block
    // npx ganache --fork https://sparkling-newest-card.bsc.discover.quiknode.pro/fc233824d17f87e92a385162e072dd5a113bb8bf@18543477

    // !!! 23012220 - all addr has allowances

    // 23011527 - all

    // 23011526 - 0

    const farm = await IDeFiAI.at(FARM_ADDR)

    const allHackerAddresses = [
      '0xd88E75b4f3A869B0b56d34f2364dfCe26386a00C',
      '0x1bbA5E6dEd13785d173484267cDbf35Ca6C08F66',
      '0x6965b3484D839d601e702E51E448A81c179c4a87',
      '0x1027D8628C862e4062409C9398fAb119ED3cA6cA',
      '0x9B5994C8B0594DDa3e932f4e9Eb71f66635ba9c9',
      '0xbB64C6dE45194a41f69D548A4bFA14856746AF92',
      '0xF1fc21eA76F0db4a4567059881304f47653B17A2',
    ]

    // let hackerBalanceInStrat = await farm.getTotalBalance(0, HACKER_WALLET_ADDR)
    // console.log(`hacker bal in strat: ${hackerBalanceInStrat}`)

    let promises = []
    allHackerAddresses.forEach(addr => {
      promises.push(farm.getTotalBalance(0, addr))
    })
    let balancesInStrat = await Promise.all(promises)
    // let hackerBalanceInStrat = await farm.getTotalBalance(0, HACKER_WALLET_ADDR)

    console.log(`all hacker balances in strat: ${balancesInStrat}`)
  })
})

//npx truffle test test/test-defi_ai_hack.js --network mainnet_fork_BSC
