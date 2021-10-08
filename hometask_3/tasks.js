// with for
Array.prototype.myFilter = function (callback, thisArgs) {
  if (typeof callback !== 'function') {
    throw new Error('Callback should be a function')
  }
  let filteredArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArgs, this[i], i, this)) {
        filteredArray.push(this[i])
      }
    }
  return filteredArray
};


// with forEach
Array.prototype.myFilter = function (callback, thisArgs) {
  if (typeof callback !== 'function') {
    throw new Error('Callback should be a function')
  }
  let filteredArray = [];
    this.forEach((elem) => {
      if (callback.call(thisArgs, elem, index, array)) {
        filteredArray.push(elem)
      }
    })
  return filteredArray
};


function createDebounceFunction(callback, msDelay) {
  if (typeof callback !== 'function' || !Number.isSafeInteger(msDelay)) {
    throw new Error('For getting correct results callback should be a function, delay should be an integer')
  }
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => { callback.apply(this, args) }, msDelay)
  }
};
