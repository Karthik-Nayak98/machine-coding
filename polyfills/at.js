Array.prototype.myAt = function (index = 0) {
  const len = this.length;
  if (index >= len || index <= -len) return;
  if (index < 0) index = index + len;
  for (let i = 0; i < len; i++) {
    if (i == index) return this[i];
  }
};
