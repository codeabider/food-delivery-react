Array.prototype.customMap = function (callback) {
  const mappedArr = [];

  for (let i = 0; i < this.length; i++) {
    mappedArr.push(callback(this[i], i, this));
  }

  return mappedArr;
};
