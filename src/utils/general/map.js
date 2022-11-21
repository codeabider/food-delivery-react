const run = () => {
  Array.prototype.customMap = function (callback) {
    const mappedArr = [];

    for (let i = 0; i < this.length; i++) {
      mappedArr.push(callback(this[i], i, this));
    }

    return mappedArr;
  };

  const arr = [1, 2, 53, -1, 2, -100, 0];
  console.log(arr.customMap((item) => item * item));
};

export default run;
