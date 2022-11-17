Dai contract address:
DAI=0x6B175474E89094C44Da98b954EedeAC495271d0F

Some Dai whale address:
DAI_WHALE = 0xf977814e90da44bfa03b6295a0616a897441acec

INFURA_API_KEY=7d36d9e7cf3947138e8c229bbaac5695

Use this line to create forked mainnet chain using ganache and infura provider (for ETH mainnet):
npx ganache --fork https://mainnet.infura.io/v3/7d36d9e7cf3947138e8c229bbaac5695 --unlock 0xf977814e90da44bfa03b6295a0616a897441acec
BSC mainnet:
npx ganache --fork https://sparkling-newest-card.bsc.discover.quiknode.pro/fc233824d17f87e92a385162e072dd5a113bb8bf

--unlock is a special command to literally "unlock" the specific address, which we don't own (to simulate transaction from it)

if ganache installed properly u gan use this line
ganache --fork https://mainnet.infura.io/v3/7d36d9e7cf3947138e8c229bbaac5695 --networkId 999

test:
Ethereum:
npx truffle test test/test-erc20.js --network mainnet_fork_ETH
Binance:
npx truffle test test/<someTest>.js --network mainnet_fork_BSC