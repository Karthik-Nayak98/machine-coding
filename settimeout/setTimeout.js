function createTimeout() {
  var timerId = 0;
  var timerMap = [];
  function setTimeout(callback, delay, ...args) {
    let id = timerId++;
    timerMap[id] = true;
    const start = Date.now();
    function triggerCallback() {
      // If the timerId is removed from the map. (That means the setTimeout is cleared.)
      if (!timerMap[id]) return;

      const timer = Date.now();
      if (timer > start + delay) {
        callback();
      } else {
        globalThis.requestIdleCallback(triggerCallback);
      }
    }
    triggerCallback();
    return id;
  }
  function clearTimeout(id) {
    delete timerId[id];
  }

  return {
    clearTimeout,
    setTimeout,
  };
}

const { setTimeout, clearTimeout } = createTimeout();

console.log('Start');
const id = setTimeout(() => {
  console.log('Hello, My name is Karthik');
}, 5000);

console.log('End');

// clearTimeout(id);
