String.prototype.myRepeat = function (iterations) {
  let result = '';

  if (iterations < 0 || iterations >= Infinity)
    throw RangeError('Invalid count value');
  for (let i = 0; i < Math.floor(iterations); i++) {
    result += this;
  }
  return result;
};

console.log('abc'.myRepeat(0)); // ''
console.log('abc'.myRepeat(1)); // 'abc'
// console.log('abc'.myRepeat(-1)); // RangeError
console.log('abc'.myRepeat(2)); // 'abcabc'
console.log('abc'.myRepeat(3.5)); // 'abcabcabc' (count will be converted to integer)
// console.log('abc'.myRepeat(1 / 0)); // RangeError
