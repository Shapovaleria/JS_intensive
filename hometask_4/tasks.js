function concatStrings(str, separator) {
  let allStrings = str;
  function makeConcatination(x) {
    if (typeof x == 'string') {
      if (separator !== undefined && typeof separator == 'string') {
        allStrings += `${separator}${x}`
        return makeConcatination
      }
      else {
        allStrings += `${x}`;
        return makeConcatination
      }
    }
    return allStrings
  };
  return makeConcatination
}


class Calculator {
  constructor(x, y, ...args) {
    if (!Number.isFinite(x) || !Number.isFinite(y) || args.length !== 0) {
      throw new Error('Function works with 2 numbers only')
    }
    this.x = x,
      this.y = y,
      this.setX = this.setX.bind(this),
      this.setY = this.setY.bind(this),
      this.logSum = this.logSum.bind(this),
      this.logMul = this.logMul.bind(this),
      this.logSub = this.logSub.bind(this),
      this.logDiv = this.logDiv.bind(this)
  }

  setX(num) {
    if (!Number.isFinite(num)) {
      throw new Error('Number is not valid')
    }
    this.x = num
  };
  setY(num) {
    if (!Number.isFinite(num)) {
      throw new Error('Number is not valid')
    }
    this.y = num
  };
  logSum() {
    console.log(this.x + this.y)
  };
  logMul() {
    console.log(this.x * this.y)
  };
  logSub() {
    console.log(this.x - this.y)
  };
  logDiv() {
    if (this.y === 0) {
      throw new Error('You can not divide by zero')
    }
    console.log(this.x / this.y)
  }
}



