var colors = Object.values(allColors())

var defaultDNA = {
  headcolor: 10,
  mouthColor: 13,
  eyesColor: 96,
  earsColor: 10,
  //Cattributes
  eyesShape: 1,
  decorationPattern: 1,
  decorationMidcolor: 13,
  decorationSidescolor: 13,
  animation: 1,
  lastNum: 1,
}

// when page load
$(document).ready(function () {
  $('#dnabody').html(defaultDNA.headcolor)
  $('#dnamouth').html(defaultDNA.mouthColor)
  $('#dnaeyes').html(defaultDNA.eyesColor)
  $('#dnaears').html(defaultDNA.earsColor)

  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
})

function getDna() {
  var dna = ''
  dna += $('#dnabody').html()
  dna += $('#dnamouth').html()
  dna += $('#dnaeyes').html()
  dna += $('#dnaears').html()
  dna += $('#dnashape').html()
  dna += $('#dnadecoration').html()
  dna += $('#dnadecorationMid').html()
  dna += $('#dnadecorationSides').html()
  dna += $('#dnaanimation').html()
  dna += $('#dnaspecial').html()

  return parseInt(dna)
}

function renderCat(dna) {
  headColor(colors[dna.headcolor], dna.headcolor)
  $('#bodycolor').val(dna.headcolor)
  mouthColor(colors[dna.mouthColor], dna.mouthColor)
  $('#mouthColor').val(dna.mouthColor)
  eyesColor(colors[dna.eyesColor], dna.eyesColor)
  $('#eyesColor').val(dna.eyesColor)
  earsColor(colors[dna.earsColor], dna.earsColor)
  $('#earsColor').val(dna.earsColor)
}

// Changing cat colors
function changeColorOf(id, callback) {
  var colorVal = $(id).val()
  callback(colors[colorVal], colorVal)
}
$('#bodycolor').change(() => changeColorOf('#bodycolor', headColor))
$('#mouthColor').change(() => changeColorOf('#mouthColor', mouthColor))
$('#eyesColor').change(() => changeColorOf('#eyesColor', eyesColor))
$('#earsColor').change(() => changeColorOf('#earsColor', earsColor))
$('#eyeShape').change(() => {
  var shape = parseInt($('#eyeShape').val())
  eyeVariation(shape)
})
