// Numbers
const buttonSeven = document.getElementById('seven');
const buttonEight = document.getElementById('eight');
const buttonNine = document.getElementById('nine');
const buttonFour = document.getElementById('four');
const buttonFive = document.getElementById('five');
const buttonSix = document.getElementById('six');
const buttonOne = document.getElementById('one');
const buttonTwo = document.getElementById('two');
const buttonThree = document.getElementById('three');
const buttonZero = document.getElementById('zero');
const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');

// Operators
const buttonMultiply = document.getElementById('multiply');
const buttonDivide = document.getElementById('divide');
const buttonEqual = document.getElementById('equals');
const buttonClear = document.getElementById('clear');

// Display
const display = document.getElementById('display');
const clearLine = document.getElementById('clearLine');
const clear = document.getElementById('clear');

let currentInput = '';
let characterLimit = 15;
let displayValue = '';

buttonSeven.addEventListener('click', () => appendNumber('7'));
buttonEight.addEventListener('click', () => appendNumber('8'));
buttonNine.addEventListener('click', () => appendNumber('9'));
buttonFour.addEventListener('click', () => appendNumber('4'));  

const appendNumber = (number) => {
  if (currentInput.length < characterLimit) {
    currentInput += number;
    displayValue = currentInput;
    display.value = displayValue;
  }
}