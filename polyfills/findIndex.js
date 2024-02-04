Array.prototype.myFindIndex = function (func, thisArg) {
  const len = this.length;
  for (let i = 0; i < len; i++) {
    if (func(this[i], i, this)) return i;
  }
  return -1;
};

const arrayLike = {
  length: 3,
  '-1': 0.1, // ignored by findIndex() since -1 < 0
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.myFindIndex.call(arrayLike, (x) => !Number.isInteger(x))
); // 1
