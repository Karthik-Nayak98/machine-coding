Array.prototype.myIncludes = function (ele, fromIndex = 0) {
  const len = this.length;
  if (fromIndex >= len) return false;
  if (fromIndex < 0) fromIndex = fromIndex + len;

  for (let i = fromIndex; i < len; i++) {
    if (Number.isNaN(ele)) return true;
    if (this[i] === ele) return true;
  }

  return false;
};

console.log([1, 2, 3].myIncludes(2)); // true
console.log([1, 2, 3].myIncludes(4)); // false
console.log([1, 2, 3].myIncludes(3, 3)); // false
console.log([1, 2, 3].myIncludes(3, -1)); // true
console.log([1, 2, NaN].myIncludes(NaN)); // true
console.log(['1', '2', '3'].myIncludes(3)); // false
