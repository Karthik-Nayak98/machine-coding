Array.prototype.myPop = function (params) {
  // Empty array
  let len = this.length || 0;
  // if (len === 0) return undefined;

  const element = this[len - 1];
  delete this[len - 1];
  this.length = this.length - 1 || len;
  return element;
};

const plants = ['a', 'b', 'c', 'd', 'e'];

plants.myPop();
console.log(plants);

const arrayLike = {
  length: 3,
  unrelated: 'foo',
  2: 4,
};
console.log(Array.prototype.myPop.call(arrayLike));
// 4
console.log(arrayLike);
// { length: 2, unrelated: 'foo' }

const plainObj = {};
// There's no length property, so the length is 0
Array.prototype.myPop.call(plainObj);
console.log(plainObj);
// { length: 0 }
