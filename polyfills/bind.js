Function.prototype.myBind = function (context, ...args) {
  let fn = this; // Here this refers to the function
  return function (..._args) {
    fn.call(context, ...args, ..._args);
  };
};
