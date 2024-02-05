Array.prototype.myFind = function (func, thisArg = null) {
  const that = thisArg || this;
  const len = that.length;
  for (let i = 0; i < len; i++) {
    if (func(that[i], i, that)) return that[i];
  }
  return;
};
