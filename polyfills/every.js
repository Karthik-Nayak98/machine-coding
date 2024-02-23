Array.prototype.myEvery = function (func, thisArg) {
  const that = thisArg || this;
  const len = that.length;
  for (let i = 0; i < len; i++) {
    if (that[i] === undefined) continue;
    if (!func(that[i], i, that)) return false;
  }
  return true;
};
