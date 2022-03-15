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

function defaultCat() {
  renderCat(defaultDNA)
}

function randomDNA() {
  var dnaStr = String(Math.floor(Math.random() * 1e16))
  var dna = {
    //Colors
    headcolor: dnaStr.substring(0, 2),
    mouthColor: dnaStr.substring(2, 4),
    eyesColor: dnaStr.substring(4, 6),
    earsColor: dnaStr.substring(6, 8),
    //Cattributes
    eyesShape: (dnaStr.substring(8, 9) % 8) + 1,
    decorationPattern: (dnaStr.substring(9, 10) % 8) + 1,
    decorationMidcolor: dnaStr.substring(10, 12),
    decorationSidescolor: dnaStr.substring(12, 14),
    animation: (dnaStr.substring(14, 15) % 6) + 1,
    lastNum: dnaStr.substring(15, 16),
  }

  return dna
}

//Random cat DNA
function randomCat() {
  var dna = randomDNA()
  //Rendering Cat
  renderCat(dna)
}

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
  eyeVariation(dna.eyesShape)
  $('#eyeShape').val(dna.eyesShape)
  decorationVariation(dna.decorationPattern)
  $('#decorationShape').val(dna.decorationPattern)
  midPatternColor(colors[dna.decorationMidcolor], dna.decorationMidcolor)
  $('#midPatternColor').val(dna.decorationMidcolor)
  sidePatternColor(colors[dna.decorationSidescolor], dna.decorationSidescolor)
  $('#sidePatternColor').val(dna.decorationSidescolor)
  animationVariation(dna.animation)
  $('#animations').val(dna.animation)
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
$('#decorationShape').change(() => {
  var shape = parseInt($('#decorationShape').val())
  decorationVariation(shape)
})
$('#midPatternColor').change(() =>
  changeColorOf('#midPatternColor', midPatternColor)
)
$('#sidePatternColor').change(() =>
  changeColorOf('#sidePatternColor', sidePatternColor)
)

$('#animations').change(() => {
  var animationVal = parseInt($('#animations').val())
  animationVariation(animationVal)
})

function showColors() {
  $('#catColors').removeClass('hidden')
  $('#cattributes').addClass('hidden')
}

function showCattributes() {
  $('#cattributes').removeClass('hidden')
  $('#catColors').addClass('hidden')
}
