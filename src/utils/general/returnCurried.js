const curry = (fn) => {
  const curried = (...args) => {
    // fn.length returns the number of params a fn can accommodate
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...rest) => {
      console.log(args, rest, fn.length);
      return curried(...args, ...rest);
    };
  };
  return curried;
};

const run = () => {
  console.clear();
  const sum = (a, b, c, d, e) => a + b + c + d + e;

  const curriedSum = curry(sum);

  //   console.log('sum: ', sum(1, 2, 3));
  console.log('curried: ', curriedSum(1)(2)(3)(4)(17));
};

export default run;
