function compose(...fns) {
  return function (value) {
    return fns.reduceRight((res, fn) => fn(res), value);
  };
}
