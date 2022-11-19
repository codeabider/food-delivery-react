const advancedThrottle = (fn: any, delay = 200) => {
  let isExecutionPaused = false;
  let waitingArgs: any;

  const throttledFn = (...args: any) => {
    // set waiting args while the fn is invoked during pause period
    if (isExecutionPaused) {
      waitingArgs = args;
      return;
    }

    const timerFn = () => {
      // unpause if there are no waiting args, ie, no fn invocation during pause period
      if (waitingArgs == null) {
        isExecutionPaused = false;
        console.log('unpaused [no waiting fn calls]');
      } else {
        // DO NOT unpause, but invoke the fn with waiting args & clear the waiting args
        fn(...waitingArgs);
        waitingArgs = null;
        console.log(
          'resetting the timer after fn invocation with waiting args'
        );

        // reset the timer, since it isn't unpaused yet
        setTimeout(timerFn, delay);
      }
    };

    isExecutionPaused = true;
    fn(...args);
    console.log('paused');

    setTimeout(timerFn, delay);
  };

  return throttledFn;
};

export default advancedThrottle;
