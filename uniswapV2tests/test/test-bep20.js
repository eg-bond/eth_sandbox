const IBEP20 = artifacts.require('IBEP20')

contract('IERC20', accounts => {
  const BUSD = '0x55d398326f99059fF775485246999027B3197955'
  const BUSD_WHALE = '0xf89d7b9c864f589bbf53a82105107622b35eaa40'
  const SOME_OTHER_WALLET = '0x508ff7b51273Ed37874a5d533CAD1DB20Dc1F504'

  it('get BUSD_T balance', async () => {
    const busd = await IBEP20.at(BUSD)
    const bal = await busd.balanceOf(BUSD_WHALE)
    console.log(`bal: ${bal}`)
  })
  it('should transfer', async () => {
    const busd = await IBEP20.at(BUSD)
    const bal = await busd.balanceOf(BUSD_WHALE)
    await busd.transfer(SOME_OTHER_WALLET, 200000, { from: BUSD_WHALE })
    const newBalW = await busd.balanceOf(BUSD_WHALE)
    const newBalAcc = await busd.balanceOf(SOME_OTHER_WALLET)
    console.log(`newBalWhale: ${newBalW}`)
    console.log(`newBalOtherAcc: ${newBalAcc}`)
  })
})
