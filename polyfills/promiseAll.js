Promise.myAll = function (promises) {
  let result = [];
  let total = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          result[total] = res;
          total++;
          if (total === promises.length) resolve(result);
        })
        .catch((err) => reject(err));
    });
  });
};

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

//run promise.all
Promise.myAll(taskList)
  .then((results) => {
    console.log('got results', results);
  })
  .catch(console.error);

//"got results" [1000,5000,3000]
