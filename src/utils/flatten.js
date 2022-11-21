const run = () => {
  Array.prototype.customFlat = function (depth = 1) {
    if (depth <= 0) {
      return this;
    }

    if (depth === Infinity) {
      depth = 99;
    }

    const flattenedArr = [];

    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i])) {
        flattenedArr.push(...this[i].customFlat(depth - 1));
      } else {
        flattenedArr.push(this[i]);
      }
    }

    return flattenedArr;
  };

  const arr = [1, [1, [1, 2], 3], [[[[4]]]]];
  console.log({ arr, flat: arr.customFlat(5) });
};

export default run;
