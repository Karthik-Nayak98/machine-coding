Promise.myAllSettled = function (promises) {
  // Maps through all promise and return the array of settled promise
  const allPromises = promises.map((promise) =>
    Promise.resolve(promise)
      .then((res) => {
        return { status: 'fulfilled', value: res };
      })
      .catch((err) => {
        return { status: 'rejected', reason: err };
      })
  );
  console.log(allPromises);
  // This is required to send the resolved promise
  return Promise.all(allPromises);
};
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.myAllSettled(promises).then((results) => console.log(results));

Promise.allSettled(promises).then(
  (results) => console.log(results)
  // results.forEach((result) => console.log(result))
);
// Expected output:
// "fulfilled"
// "rejected"
