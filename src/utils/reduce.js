Array.prototype.customReduce = function (callback, initialVal) {
  if (!this.length && initialVal == null) {
    throw new Error('Array must not be empty or initial value must be passed');
  }

  if (!this.length) {
    return initialVal;
  }

  // TODO: Array.prototype.reduce returns result in case of undefined initialVal as well
  if (initialVal == null) {
    return;
  }

  let aggregate = initialVal;

  for (let i = 0; i < this.length; i++) {
    aggregate = callback(aggregate, this[i], i, this);
  }

  return aggregate;
};
