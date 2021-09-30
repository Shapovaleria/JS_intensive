// 1
function writeNumberInANewBase() {
  let numberForChange = prompt('Введите число', 0);
  let numberForBase = prompt('Введите систему исчисления, число от 2 до 32', 2);
  
  if ( isFinite(numberForChange) &&
    +numberForChange > 0 &&
    !isNaN(+numberForBase) &&
    numberForBase >= 2 &&
    numberForBase <= 32) {
    console.log(parseInt(numberForChange).toString(numberForBase))
  }
  else {
    console.log('Некорректный ввод!')
  }
}

// 2
function getSumAndQuotient() {
  let firstNumber = prompt('Введите первое число', 0);

  if (!isFinite(+firstNumber)) {
      console.log('Некорректный ввод!');
  }
  else {
    let secondNumber = prompt('Введите второе число', 0);
    if (isNaN(+secondNumber)) {
      console.log('Некорректный ввод!')
    }
    else {
      console.log(`Ответ: ${+firstNumber + +secondNumber}, ${Math.floor(firstNumber / secondNumber * 100) / 100}`)
    }
  }
}
