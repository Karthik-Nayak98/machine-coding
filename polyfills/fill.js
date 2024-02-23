Array.prototype.myFill = function (value, start = 0, end = this.length) {
  if (start > this.length) return this;
  if (start < 0) start = start + this.length;

  if (end < 0) end = end + this.length;
  if (end > this.length) end = this.length;

  if (end < start) return this;

  for (let i = start; i < end; i++) {
    this[i] = value;
  }
  return this;
};

const arrayLike = { length: 2 };
console.log(Array.prototype.myFill.call(arrayLike, 1));
// { '0': 1, '1': 1, length: 2 }
