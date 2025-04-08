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
const buttonDecimal = document.getElementById('decimal');

// Operators
const buttonMultiply = document.getElementById('multiply');
const buttonDivide = document.getElementById('divide');
const buttonEqual = document.getElementById('equals');

// Display
const display = document.getElementById('display');
const clearLine = document.getElementById('clearLine');
const clear = document.getElementById('clear');

let currentInput = '';
let characterLimit = 15;
let displayValue = '';


// Event Listeners for number buttons
buttonSeven.addEventListener('click', () => appendNumber('7'));
buttonEight.addEventListener('click', () => appendNumber('8'));
buttonNine.addEventListener('click', () => appendNumber('9'));
buttonFour.addEventListener('click', () => appendNumber('4'));  
buttonFive.addEventListener('click', () => appendNumber('5'));
buttonSix.addEventListener('click', () => appendNumber('6'));
buttonOne.addEventListener('click', () => appendNumber('1'));
buttonTwo.addEventListener('click', () => appendNumber('2'));
buttonThree.addEventListener('click', () => appendNumber('3'));
buttonZero.addEventListener('click', () => appendNumber('0'));
buttonDecimal.addEventListener('click', () => {
    if(currentInput.slice(-1) !== '.') {
        appendNumber('.');
    }
    else {
        display.value = currentInput;
    }
});

// Event Listeners for operator buttons
buttonPlus.addEventListener('click', () => {
    if (currentInput.length > 0 && !['+', '-', '*', '/'].includes(currentInput.slice(-1))) {
        appendNumber('+');
    } else {
        display.value = currentInput;
    }
});
buttonMinus.addEventListener('click', () => appendNumber('-'));
buttonMultiply.addEventListener('click', () => appendNumber('*'));
buttonDivide.addEventListener('click', () => appendNumber('/'));

buttonEqual.addEventListener('click', () => {
    if(currentInput.slice(-1) === '+' || currentInput.slice(-1) === '-' || currentInput.slice(-1) === '*' || currentInput.slice(-1) === '/') {
        currentInput = currentInput.slice(0, -1);
    }
    if (currentInput.length === 0) {
        display.value = '';
        return;
    }
  try {
    const result = eval(currentInput);
    displayValue = result.toString();
    currentInput = displayValue;
    if (displayValue.length > characterLimit) {
      displayValue = displayValue.slice(0, characterLimit);
    }
    display.value = displayValue;
  } catch (error) {
    display.value = 'Error';
    currentInput = '';
  }
});

const removeLastCharacter = () => {
  if (currentInput.length > 0) {
    currentInput = currentInput.slice(0, -1);
    displayValue = currentInput;
    display.value = displayValue;
  }
}

clearLine.addEventListener('click', removeLastCharacter);

const clearDisplay = () => {
  currentInput = '';
  displayValue = '';
  display.value = displayValue;
}

clear.addEventListener('click', clearDisplay);

const appendNumber = (number) => {
  if (currentInput.length < characterLimit) {
    currentInput += number;
    displayValue = currentInput;
    display.value = displayValue;
  }
}