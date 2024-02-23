Array.prototype.myFilter = function (func) {
  let result = [];
  let j = 0;
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) result[j++] = this[i];
  }

  return result;
};

const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: 'undefined' },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}
