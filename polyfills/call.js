Function.prototype.myCall = function (context, ...args) {
  let currentContext = context || globalThis;
  let randomProp = Math.random();
  while (currentContext[randomProp] !== undefined) {
    randomProp = Math.random();
  }
  currentContext[randomProp] = this;
  return currentContext[randomProp](...args);
};

const obj1 = {
  name: 'Karthik',
};

const obj2 = {
  name: 'Aditya',
};

function display(place) {
  console.log(`Name is ${this.name} and place is ${place}`);
}
function display1() {
  console.log('Display function');
}

display.myCall(obj2, 'Udupi');
// display1.myCall();
