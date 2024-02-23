const createInterval = function () {
  let timer = 0;
  let timerId = [];
  function setInterval(callback, delay, ...args) {
    let id = timer++;
    timerId[id] = true;
    let start = Date.now();
    function triggerCallback() {
      if (!timerId[id]) return;

      let currentTime = Date.now();
      if (currentTime > start + delay) {
        start = currentTime;
        callback.apply(this, args);
        requestIdleCallback(triggerCallback);
      } else {
        requestIdleCallback(triggerCallback);
      }
    }
    triggerCallback();
    return id;
  }

  function clearInterval() {
    delete timerId[id];
  }
  return { setInterval, clearInterval };
};

const { clearInterval, setInterval } = createInterval();

console.log('Start');
let cnt = 0;
var id = setInterval(() => {
  cnt++;
  console.log('Hello, My name is Karthik');
  if (cnt >= 5) clearInterval(id);
}, 1000);
console.log('End');
