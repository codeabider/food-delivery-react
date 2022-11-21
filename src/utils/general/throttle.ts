const throttle = (fn: any, delay = 200) => {
  let isExecutionPaused = false;

  const throttledFn = (...args: any) => {
    if (isExecutionPaused) return;

    isExecutionPaused = true;
    fn(...args);
    console.log('paused');

    setTimeout(() => {
      isExecutionPaused = false;
      console.log('unpaused');
    }, delay);
  };

  return throttledFn;
};

export default throttle;
