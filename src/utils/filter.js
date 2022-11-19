// lesson: using arrow function will default `this` to Window obj

Array.prototype.customFilter = function (callback) {
  const filteredArr = [];

  for (let i = 0; i < this.length; i++) {
    const cbEvaluation = callback(this[i], i, this);

    if (cbEvaluation) {
      filteredArr.push(this[i]);
    }
  }

  return filteredArr;
};
