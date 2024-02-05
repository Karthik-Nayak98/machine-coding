Array.prototype.mySome = function (func, thisArg) {
  const that = thisArg || this;
  const len = that.length;
  for (let i = 0; i < len; i++) {
    if (func(that[i], i, that)) return true;
  }
  return false;
};
