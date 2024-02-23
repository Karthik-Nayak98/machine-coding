const search = document.getElementById('search-input');
const delay = 300;

const getData = function (value) {
  console.log(`The value is ${value}`);
};

function throttle(callback, delay) {
  let start = 0;
  return (...args) => {
    let current = new Date().getTime();
    if (current - start < delay) return;
    start = current;
    return callback(...args);
  };
}
const efficientFunction = throttle(getData, 800);

search.addEventListener('input', (e) => {
  efficientFunction(e.target.value);
});
