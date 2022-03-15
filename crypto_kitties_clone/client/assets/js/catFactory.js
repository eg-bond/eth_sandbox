//Random color
function getColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16)
  return randomColor
}

function genColors() {
  var colors = []
  for (var i = 10; i < 99; i++) {
    var color = getColor()
    colors[i] = color
  }
  return colors
}

//colors change
function headColor(color, code) {
  $('.cat__head, .cat__chest').css('background', '#' + color) //This changes the color of the cat
  $('#headcode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function mouthColor(color, code) {
  $('.cat__mouth-contour, .cat__chest_inner, .cat__tail').css(
    'background',
    '#' + color
  )
  $('#mouthcode').html('code: ' + code)
  $('#dnamouth').html(code)
}
function eyesColor(color, code) {
  $('.cat__eye span').css('background', '#' + color)
  $('#eyescode').html('code: ' + code)
  $('#dnaeyes').html(code)
}
function earsColor(color, code) {
  $(
    '.cat__ear--left, .cat__ear--right, .cat__paw-left, .cat__paw-left_inner, .cat__paw-right, .cat__paw-right_inner'
  ).css('background', '#' + color)
  $('#earscode').html('code: ' + code)
  $('#dnaears').html(code)
}

function midPatternColor(color, code) {
  $('.cat__head-dots').css('background', '#' + color)
  $('#midPatternCode').html('code: ' + code)
  $('#dnadecorationMid').html(code)
}
function sidePatternColor(color, code) {
  $('.cat__head-dots_first, .cat__head-dots_second').css(
    'background',
    '#' + color
  )
  $('#sidePatternCode').html('code: ' + code)
  $('#dnadecorationSides').html(code)
}

//shape change
function eyeVariation(num) {
  $('#dnashape').html(num)
  switch (num) {
    case 1:
      normalEyes()
      $('#eyeName').html('Basic')
      break
    case 2:
      normalEyes() //reset
      $('#eyeName').html('Down')
      eyesType1()
      break
    case 3:
      normalEyes() //reset
      $('#eyeName').html('Up')
      eyesType2()
      break
    case 4:
      normalEyes() //reset
      $('#eyeName').html('Watching')
      eyesType3()
      break
    default:
      normalEyes() //reset
      $('#eyeName').html('Not implemented')
      break
  }
}

function decorationVariation(num) {
  $('#dnadecoration').html(num)
  switch (num) {
    case 1:
      $('#decorationName').html('Basic')
      normaldecoration()
      break
    case 2:
      normaldecoration()
      $('#decorationName').html('Up')
      decorationType1()
      break
    case 3:
      normaldecoration()
      $('#decorationName').html('Left')
      decorationType2()
      break
    case 4:
      normaldecoration()
      $('#decorationName').html('Peace')
      decorationType3()
      break
    default:
      normaldecoration()
      $('#decorationName').html('Not implemented')
      break
  }
}

async function normalEyes() {
  await $('.cat__eye').find('span').css('border', 'none')
}
async function eyesType1() {
  await $('.cat__eye').find('span').css('border-top', '15px solid')
}
async function eyesType2() {
  await $('.cat__eye').find('span').css('border-bottom', '15px solid')
}
async function eyesType3() {
  await $('.cat__eye')
    .find('span')
    .css('border-bottom', '15px solid')
    .css('border-top', '15px solid')
}

async function normaldecoration() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  $('.cat__head-dots').css({
    transform: 'rotate(0deg)',
    height: '48px',
    width: '14px',
    top: '1px',
    left: '101px',
    'border-radius': '0 0 50% 50%',
  })
  $('.cat__head-dots_first').css({
    transform: 'rotate(0deg)',
    height: '35px',
    width: '14px',
    top: '1px',
    'border-radius': '50% 0 50% 50%',
  })
  $('.cat__head-dots_second').css({
    transform: 'rotate(0deg)',
    height: '35px',
    width: '14px',
    top: '1px',
    'border-radius': '0 50% 50% 50%',
  })
}
async function decorationType1() {
  $('.cat__head-dots').css({
    transform: 'rotate(180deg)',
  })
}
async function decorationType2() {
  $('.cat__head-dots').css('left', '80px')
}
async function decorationType3() {
  $('.cat__head-dots').css('top', '30px')
  $('.cat__head-dots_first').css({
    transform: 'rotate(135deg)',
    height: '45px',
    top: '-30px',
  })
  $('.cat__head-dots_second').css({
    transform: 'rotate(45deg)',
    height: '45px',
    top: '-30px',
  })
}
