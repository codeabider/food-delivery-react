// same as pipe, but from right to left args
export const compose = (...functions) => {
  return (...args) => {
    return functions.reduceRight((prevResult, currFn) => {
      return currFn(prevResult);
    }, args[args.length - 1]);
  };
};

const run = () => {
  const addHundred = (num) => num + 100;

  const multiplyByFive = (num) => num * 5;

  const subtractFifty = (num) => num - 50;

  console.log(compose(addHundred, multiplyByFive, subtractFifty)(20));
};

export default run;
