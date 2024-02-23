Array.prototype.myReverse = function () {
  let len = this.length || 0;
  let i = 0,
    j = len - 1;

  while (i < j) {
    const temp = this[j];
    this[j] = this[i];
    this[i] = temp;
    i++;
    j--;
  }
  return this;
};

const arrayLike = {
  length: 3,
  unrelated: 'foo',
  2: 4,
  3: 33, // ignored by reverse() since length is 3
};
console.log(Array.prototype.myReverse.call(arrayLike));
// { 0: 4, 3: 33, length: 3, unrelated: 'foo' }
// The index 2 is deleted because there was no index 0 present originally
// The index 3 is unchanged since the length is 3
