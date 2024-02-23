Array.prototype.myReduce = function (func, initialValue) {
  if (this.length === 0 && !initialValue)
    throw new TypeError('Reduce of empty array with no partial value');

  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = func.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  // for (let i = idx; i < this.length; i++) {
  //   console.log(this[i]);
  //   total = func(total, this[i]);
  // }
  return accumulator;
};

// const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
// console.log([1, 100].myReduce(getMax, 50)); // 100
// console.log([50].myReduce(getMax, 10)); // 50

// callback is invoked once for element at index 1
// console.log([1, 100].myReduce(getMax)); // 100

// callback is not invoked
// console.log([50].myReduce(getMax)); // 50
// console.log([].myReduce(getMax, 1)); // 1

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0
);

// console.log(sum); // 6

console.log([1, 2, , 4].myReduce((a, b) => a + b)); // 7
// console.log([1, 2, undefined, 4].myReduce((a, b) => a + b)); // NaN
