Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(resolve, reject).catch(reject);
    });
  });
};

const foreverPendingPromise = Promise.myRace([]);
const alreadyFulfilledProm = Promise.resolve(100);

const arr = [foreverPendingPromise, alreadyFulfilledProm, 'non-Promise value'];
const arr2 = [foreverPendingPromise, 'non-Promise value', Promise.resolve(100)];
const p = Promise.myRace(arr);
const p2 = Promise.myRace(arr2);

console.log(p);
console.log(p2);
setTimeout(() => {
  console.log('the stack is now empty');
  console.log(p);
  console.log(p2);
});

// Logs, in order:
// Promise { <state>: "pending" }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 100 }
// Promise { <state>: "fulfilled", <value>: "non-Promise value" }
