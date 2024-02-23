timerIds = [];

originalTimeout = setTimeout;

setTimeout = function (fn, delay) {
  const id = originalTimeout(fn, delay);
  timerIds.push(id);
  return id;
};

clearAllTimeout = () => {
  while (timerIds.length) {
    console.log(timerIds);
    clearTimeout(timerIds.pop());
  }
};
