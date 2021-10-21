const output = document.getElementById('calc-output')
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const clearBtn = document.querySelector('.clear')
const calculateBtn = document.querySelector('.equality')
const backspaceBtn = document.querySelector('.backspace')
const changeSignBtn = document.querySelector('.change-sign')

for (let num of numbers) {
  num.addEventListener('click', clickNumber(num.textContent))
}

for (let operation of operations) {
  operation.addEventListener('click', clickOperation(operation.textContent))
}

clearBtn.addEventListener('click', clickClearAll());
backspaceBtn.addEventListener('click', () => clearLastSymbol());
changeSignBtn.addEventListener('click', () => changeSign());
calculateBtn.addEventListener('click', () => finalCalculation());

let decimalcounter = 0;
function clickNumber(num) {
  return function () {
    if (num === '.' && decimalcounter < 1) {
      decimalcounter++;
      output.value += num;
    }
    else if (num === '0' && output.value.slice(-1) === '÷') {
      showErrorMessage('you can\'t divide by zero')
    }
    else if (num !== '.' && output.value.length <= 25) {
      output.value += num
    }
    else if (output.value.length > 25) {
      showErrorMessage('it\'s a limit of numbers');
      output.value.length--;
    }
  }
}

function clickOperation(op) {
  return function () {
    if (output.value.slice(-1) !== '+' && output.value.slice(-1) !== '-' && output.value.slice(-1) !== '×' && output.value.slice(-1) !== '÷') {
      output.value += op;
      decimalcounter = 0;
      lastOperation = null;
    }
    else {
      showErrorMessage('you can use only one operation')
    }
  }
}

function makeArrayFromString(str) {
  let arrayFromStr = [];
  let currentNum = '';
  for (let character of str) {
    if ('×÷+-'.indexOf(character) > -1) {
      if (currentNum === '' && character === '-') {
        currentNum = '-';
      }
      else {
        arrayFromStr.push(+currentNum, character)
        currentNum = '';
      }
    }
    else {
      currentNum += character;
    }
  }
  if (currentNum !== '') {
    arrayFromStr.push(+currentNum)
  }
  return arrayFromStr
}

const basicOperations = [
  { '×': (x, y) => x * y },
  { '÷': (x, y) => x / y },
  { '+': (x, y) => x + y },
  { '-': (x, y) => x - y }
];

function calculateNumbers(array) {
  let operator;
  for (const operation of basicOperations) {
    let newArray = [];
    for (const elem of array) {
      if (elem in operation) {
        operator = operation[elem];
      }
      else if (operator) {
        newArray[newArray.length - 1] =
          operator(newArray[newArray.length - 1], elem);
        operator = null;
      }
      else {
        newArray.push(elem)
      }
    }
    array = newArray;
  }
  if (!Number.isSafeInteger(+array[0])) {
    if (array[0] == undefined) {
      showErrorMessage('finish counting, enter second operand')
    }
    else if (Number.isNaN(array[0])) {
      showErrorMessage('enter correct expression')
    }
    else {
      output.value = +array[0].toFixed(8)
    }
  }
  else {
    output.value = +array[0];
  }
}

let lastOperation;
function finalCalculation() {
  if (!lastOperation) {
    let arrayFromStr = makeArrayFromString(output.value)
    lastOperation = arrayFromStr.slice(-2);
    calculateNumbers(arrayFromStr);
  }
  else {
    let repeatLastOperationArr = [+output.value, lastOperation[0], lastOperation[1]];
    calculateNumbers(repeatLastOperationArr)
  }
}

function clickClearAll() {
  return function () {
    output.value = '';
    lastOperation = null;
  }
}

function clearLastSymbol() {
  output.value = output.value.slice(0, output.value.length - 1)
}

function changeSign() {
  if (!Number.isNaN(+output.value)) {
    output.value = -(+output.value);
  }
  else {
    showErrorMessage('you can change a sign of one number')
  }
}

function showErrorMessage(message) {
  let previous = output.value;
  output.value = message;
  setTimeout(() => {
    output.value = previous
  }, 2000);
}