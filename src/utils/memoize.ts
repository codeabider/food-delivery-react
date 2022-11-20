const memoize = (fn: any) => {
  const resultCache: any = {};

  const memoizedFn = (...args: any) => {
    const key = JSON.stringify(args);
    const cachedResult = resultCache[key];

    if (cachedResult) {
      console.log(
        'result found with args --> returning cached result',
        resultCache,
        cachedResult
      );
      return cachedResult;
    }

    const fnResult = fn(...args);
    resultCache[key] = fnResult;

    return fnResult;
  };

  return memoizedFn;
};

export default memoize;
