Array.prototype.myUnshift = function () {
  const argsLen = arguments.length;
  const len = this.length || 0;
  let list = this;
  let i = 0;
  for (i = len - 1; i >= 0; i--) {
    if (i in list) {
      this[i + argsLen] = this[i];
    }
    delete this[i];
  }

  for (i = 0; i < argsLen; i++) {
    this[i] = arguments[i];
  }
  this.length = len + argsLen;
  return this.length;
};

const arrayLike = {
  length: 3,
  unrelated: 'foo',
  2: 4,
};

Array.prototype.myUnshift.call(arrayLike, 1, 2);
console.log(arrayLike);
// { '0': 1, '1': 2, '4': 4, length: 5, unrelated: 'foo' }

const plainObj = {};
// There's no length property, so the length is 0
Array.prototype.myUnshift.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }
