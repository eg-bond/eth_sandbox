const IERC20 = artifacts.require('IERC20')

contract('IERC20', accounts => {
  const DAI = '0x6b175474e89094c44da98b954eedeac495271d0f'
  const DAI_WHALE = '0xf977814e90da44bfa03b6295a0616a897441acec'

  it('get DAI balance', async () => {
    const dai = await IERC20.at(DAI)
    const bal = await dai.balanceOf(DAI_WHALE)
    console.log(`bal: ${bal}`)
  })
  it('should transfer', async () => {
    const dai = await IERC20.at(DAI)
    const bal = await dai.balanceOf(DAI_WHALE)
    await dai.transfer(accounts[0], bal, { from: DAI_WHALE })
    const newBal = await dai.balanceOf(DAI_WHALE)
    console.log(`newBal: ${newBal}`)
  })
})
