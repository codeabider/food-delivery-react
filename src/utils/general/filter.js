// lesson: using arrow function will default `this` to Window obj

const run = () => {
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

  const arr = [1, 2, 53, -1, 2, -100, 0];
  console.log(arr.customFilter((item) => item >= 0));
};

export default run;
