function pipe(...fns) {
  return function (value) {
    return fns.reduce((res, fn) => fn(res), value);
  };
}
