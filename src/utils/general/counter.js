const counter = () => {
  let _count = 0;

  const increment = () => {
    return ++_count;
  };

  const decrement = () => {
    return --_count;
  };

  const printCount = () => {
    return _count;
  };

  return {
    increment,
    decrement,
    printCount
  };
};

const run = () => {
  console.clear();

  const count1 = counter();
  const count2 = counter();
  const count3 = counter();

  console.log(
    '\n counter 1 \n',
    count1.increment(),
    count1.increment(),
    count1.increment(),
    count1.decrement(),
    count1.increment(),
    '\n counter 2 \n',
    count2.increment(),
    count2.increment(),
    count2.increment(),
    '\n counter 3 \n',
    count3.decrement()
  );
};

export default run;
