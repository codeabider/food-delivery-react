export const sumCurry = (...args) => {
  const getSum = (aggregate, curr) => aggregate + curr;

  const curried = (...otherArgs) => {
    if (!otherArgs.length) {
      return args.reduce(getSum);
    }
    return sumCurry([...args, ...otherArgs].reduce(getSum));
  };

  return curried;
};

const run = () => {
  console.log(sumCurry(2)(4, 10, 5)(7)(8, 5)(9)());
};

export default run;
