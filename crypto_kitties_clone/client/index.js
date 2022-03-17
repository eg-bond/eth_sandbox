let web3 = new Web3(Web3.givenProvider)

let instance
let user
let contractAddress = '0x01B494d0a8a98277eCD79CF5CF4B3b967522009F'

$(document).ready(function () {
  window.ethereum.enable().then(function (accounts) {
    //abi defined in abi.js
    instance = new web3.eth.Contract(abi, contractAddress, {
      from: accounts[0],
    })
    user = accounts[0]
    console.log(instance)

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

function createKitty() {
  var dnaStr = getDna()
  instance.methods.createKittyGen0(dnaStr).send({}, function (error, txHash) {
    if (error) console.log(err)
    else console.log(txHash)
  })
}

async function getKitties() {
  var arrayId
  var kitty
  try {
    arrayId = await instance.methods.getKittyByOwner(user).call()
  } catch (err) {
    console.log(err)
  }
  for (i = 0; i < arrayId.length; i++) {
    kitty = await instance.methods.getKitty(arrayId[i]).call()
    appendCat(kitty[0], i)
  }
  console.log(kitty)
}

function displayKittyInfo(owner, kittyId, mumId, dadId, genes) {
  $('kittytable').removeClass('hidden')
}

//Get kittues for breeding that are not selected
async function breedKitties(gender) {
  var arrayId = await instance.methods.getKittyByOwner(user).call()
  for (i = 0; i < arrayId.length; i++) {
    appendBreed(arrayId[i], gender)
  }
}

//Appending cats to breed selection
async function appendBreed(id, gender) {
  var kitty = await instance.methods.getKitty(id).call()
  breedAppend(kitty[0], id, kitty.generation, gender)
}

function go_to(url) {
  window.location.href = url
}
