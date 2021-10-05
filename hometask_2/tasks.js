function makeObjectDeepCopy(obj) {
  if (!obj || typeof (obj) !== 'object') {
    console.log('Function works with objects only');
    return obj
  }
  let objCopy = Array.isArray(obj) ? [] : {};
  for (let i in obj) {
    if (obj[i] && typeof (obj[i]) === "object" && !(obj[i] instanceof Array)) {
      objCopy[i] = makeObjectDeepCopy(obj[i]);
    }
    else if ((obj[i] instanceof Array)) {
      objCopy[i] = obj[i].map((i) => {
        if (typeof i === 'object') {
          return i.slice()
        }
        return i
      });
    }
    else {
      objCopy[i] = obj[i];
    }
  }
  return objCopy;
};


function selectFromInterval(arr, num1, num2) {
  if (!(arr instanceof Array)) {
    throw new Error('Function works with arrays')
  };
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    throw new Error('Ends of the interval should be integers')
  };
  let result = []
  for (elem of arr) {
    if (typeof elem !== 'number') {
      throw new Error('Array should content numbers')
    };
    if (num1 < num2) {
      if (elem >= num1 && elem <= num2) {
        result.push(elem)
      }
    }
    else if (num1 >= num2) {
      if (elem >= num2 && elem <= num1) {
        result.push(elem)
      }
    }
  }
  return result
};


const myIterable = {
  from: 5,
  to: 5,

  [Symbol.iterator]() {
    if (!Number.isInteger(this.to) || !Number.isInteger(this.from) || this.from >= this.to || !this.from || !this.to) {
      throw new Error('Object should content 2 keys - "from" and "to", values should be integers, "from" value must be less than "to" value')
    };
    this.currentValue = this.from;
    return this
  },

  next() {
    if (this.currentValue <= this.to) {
      return {
        done: false,
        value: this.currentValue++
      }
    } else {
      return {
        done: true,
        value: undefined
      }
    }
  }
};
