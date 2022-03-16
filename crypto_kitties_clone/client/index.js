let web3 = new Web3(Web3.givenProvider)

let instance
let user
let contractAddress = '0x1DE42cB144F5Eb1778C3f5D265DF2dfeF41E704b'

$(document).ready(function () {
  window.ethereum.enable().then(function (accounts) {
    //abi defined in abi.js
    instance = new web3.eth.Contract(abi, contractAddress, {
      from: accounts[0],
    })
    user = accounts[0]

    instance.events
      .Birth()
      .on('data', function (event) {
        let mumId = event.returnValues._mumId
        let dadId = event.returnValues._dadId
        let generation = event.returnValues._generation
        let genes = event.returnValues._genes
        let owner = event.returnValues._owner
        $('#kittyCreation').css('display', 'block')
        $('#kittyCreation').text(
          'owner:' +
            owner +
            ' generation:' +
            generation +
            ' mumId:' +
            mumId +
            ' dadId:' +
            dadId +
            ' genes:' +
            genes
        )
      })
      .on('error', console.error)
  })
})
