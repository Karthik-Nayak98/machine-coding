// function curryFunction(func) {
//   return function curriedFunction(...args) {
//     if (args.length >= func.length) {
//       return func.call(this, ...args);
//     }

//     return function (..._args) {
//       return curriedFunction.call(this, ...args, ..._args);
//     };
//   };
// }

function add(sumArgs) {
  return sumArgs.reduce((total, item) => total + item, 0);
}
function sum(...args) {
  let sumArgs = [...args];
  if (sumArgs.length == 5) return add(sumArgs);
  else {
    const temp = function (..._args) {
      sumArgs = [...sumArgs, ..._args];
      if (sumArgs.length == 5) return add(sumArgs);
      else return temp;
    };
    return temp;
  }
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2)(3, 4, 5));
console.log(sum(1)(2, 3, 4, 5));
console.log(sum(1, 2, 3)(4, 5));
console.log(sum(1)(2)(3)(4)(5));
console.log(sum(1, 2, 3, 4)(5));

// const curriedAdd = curryFunction(add);
// const console.log(sum = curriedAdd(1, 4)(2, 3));
// console.log(console.log(sum));
