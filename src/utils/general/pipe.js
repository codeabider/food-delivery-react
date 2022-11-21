/*
it combines n functions. It’s a pipe flowing left-to-right, calling each function with the output of the last one.

https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937
*/
export const pipe = (...functions) => {
  return (...args) => {
    return functions.reduce((prevResult, currFn) => {
      return currFn(prevResult);
    }, args[0]);
  };
};

const run = () => {
  const addHundred = (num) => num + 100;

  const multiplyByFive = (num) => num * 5;

  const subtractFifty = (num) => num - 50;

  console.log(pipe(addHundred, multiplyByFive, subtractFifty)(20));
};

export default run;
