const runOnce = (fn) => {
  let _callCounter = 0;

  return (...args) => {
    if (_callCounter === 0) {
      _callCounter++;
      fn(...args);
    }

    console.error('The function can be called only once.');
  };
};

const run = () => {
  console.clear();

  const someFn = (a, b) => console.log('function executed', a, b);

  const someFnOnce = runOnce(someFn);

  someFnOnce(1, 2);
  someFnOnce(2, 3);
  someFnOnce(4, 5);
  someFnOnce(1, 2);
  someFnOnce(0, 0);
  someFnOnce(4, 5);
};

export default run;
