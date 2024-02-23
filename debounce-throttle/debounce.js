const searchInput = document.getElementById('search-input');

function getData(value) {
  console.log(`Value: ${value}`);
}

function debounce(callback, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
}
const efficientFunction = debounce(getData, 300);

searchInput.addEventListener('input', (e) => efficientFunction(e.target.value));
