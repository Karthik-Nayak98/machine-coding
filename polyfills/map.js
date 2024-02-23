Array.prototype.myMap = function (func) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = func(this[i], i, this);
  }

  return result;
};
