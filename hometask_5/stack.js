class Stack {
  constructor(maxSize = 10) {
    if (!Number.isSafeInteger(maxSize) || maxSize < 1) {
      throw new Error('Max size of stack should be an integer > 0')
    }
    this.maxSize = maxSize,
    this.last = null,
    this.length = 0;
  }

  push(elem) {
    const element = {value: elem, previous: null}
    if (this.last) {
      if (this.length < this.maxSize) {
        element.previous = this.last
      }
      else {
        throw new Error(`The stack is already full, max size is ${this.maxSize}`)
      }
    }
    this.last = element ;
    this.length++;
  };
  pop() {
    if (!this.last) {
      throw new Error('The stack is empty, deleting is impossible')
    }
    let deletedLast = this.last;
    this.last = this.last.previous;
    this.length--;
    return deletedLast.value
  };
  peek() {
    if (!this.last) {
      return null
    }
    return this.last.value
  };
  isEmpty() {
    if (this.length === 0) {
      return true
    }
    return false
  };
  toArray() {
    let arrayFromStack = [];
    let currentElem = this.last;
    while (currentElem) {
      arrayFromStack.push(currentElem.value);
      currentElem = currentElem.previous
    } 
    return arrayFromStack.reverse()
  };

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error(`${iterable} is not iterable`)
    }
    let stackFromIterable = new Stack(iterable.length ? iterable.length : iterable.size);
    for (let elem of iterable) {
      stackFromIterable.push(elem)
    }
    return stackFromIterable
  }
}
// module.exports = { Stack };

