DAI=0x6B175474E89094C44Da98b954EedeAC495271d0F
DAI_WHALE = 0xf977814e90da44bfa03b6295a0616a897441acec
INFURA_API_KEY=7d36d9e7cf3947138e8c229bbaac5695

npx ganache --fork https://mainnet.infura.io/v3/7d36d9e7cf3947138e8c229bbaac5695
--networkId 999
--unlock 0xf977814e90da44bfa03b6295a0616a897441acec

ganache --fork https://mainnet.infura.io/v3/$INFURA_API_KEY 
--networkId 999

