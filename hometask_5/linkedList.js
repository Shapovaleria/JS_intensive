class LinkedList {
  constructor() {
    this.first = null,
      this.last = null
  }

  append(elem) {
    let element = { value: elem, next: null }
    if (!this.first) {
      this.first = element;
    }
    if (this.last) {
      this.last.next = element
    }
    this.last = element
  };
  prepend(elem) {
    let element = { value: elem, next: this.first };
    this.first = element;
    if (!this.last) {
      this.last = element
    }
  };
  find(elem) {
    if (!this.first) {
      return null
    }
    let currentElem = this.first;
    while (currentElem) {
      if (currentElem.value === elem) {
        return currentElem.value
      }
      currentElem = currentElem.next
    }
    return null
  };
  toArray() {
    let arrayFromList = [];
    let currentElem = this.first;
    while (currentElem) {
      arrayFromList.push(currentElem.value);
      currentElem = currentElem.next
    }
    return arrayFromList
  };

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error(`${iterable} is not iterable`)
    }
    let listFromIterable = new LinkedList(iterable.length ? iterable.length : iterable.size);
    for (let elem of iterable) {
      listFromIterable.append(elem)
    }
    return listFromIterable
  }
}
