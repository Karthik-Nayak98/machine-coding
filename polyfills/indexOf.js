Array.prototype.myIndexOf = function (ele, fromIndex = 0) {
  const len = this.length;
  if (fromIndex >= this.length) return -1;
  if (fromIndex < 0) fromIndex = fromIndex + len;

  if (this instanceof String) {
    console.log('string');
    return;
  }
  for (let i = fromIndex; i < len; i++) {
    if (this[i] === ele) return i;
  }

  return -1;
};
