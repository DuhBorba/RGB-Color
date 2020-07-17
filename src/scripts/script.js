var redRange = document.querySelector('#range-red');
var greenRange = document.querySelector('#range-green');
var blueRange = document.querySelector('#range-blue');

var redInput = document.querySelector('#input-red');
var greenInput = document.querySelector('#input-green');
var blueInput = document.querySelector('#input-blue');

var borderColor = document.querySelector('.container');
borderColor.style.borderColor = '#000';
borderColor.style.boxShadow = '0px 0px 80px rgb(0,0,0)';
var bgColor = document.querySelector('#bg-color');
bgColor.style.backgroundColor = '#000';

var red = 0;
var green = 0;
var blue = 0;

function start() {
  redRange.addEventListener('input', function () {
    var currentValueRed = redRange.value;
    red = currentValueRed;
    redInput.value = currentValueRed;
    renderColors(red);
  });

  greenRange.addEventListener('input', function () {
    var currentValueGreen = greenRange.value;
    green = currentValueGreen;
    greenInput.value = currentValueGreen;
    renderColors(green);
  });

  blueRange.addEventListener('input', function () {
    var currentValueBlue = blueRange.value;
    blue = currentValueBlue;
    blueInput.value = currentValueBlue;
    renderColors(blue);
  });

  function renderColors(r, g, b) {
    r = red;
    g = green;
    b = blue;
    bgColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    borderColor.style.borderColor = `rgb(${red}, ${green}, ${blue})`;
    borderColor.style.boxShadow = `0px 0px 80px rgb(${red}, ${green}, ${blue})`;
  }
}

start();
