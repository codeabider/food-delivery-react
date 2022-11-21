import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import debounce from '../../utils/general/debounce';
import throttle from '../../utils/general/throttle';
import advancedThrottle from '../../utils/general/advancedThrottle';
import memoize from '../../utils/general/memoize';

import copyDeepDemo from '../../utils/general/copyDeep.js';
import pipeDemo from '../../utils/general/pipe.js';
import composeDemo from '../../utils/general/compose.js';
import sumCurryDemo from '../../utils/general/curry.js';

import forEachDemo from '../../utils/general/forEach.js';
import mapDemo from '../../utils/general/map.js';
import filterDemo from '../../utils/general/filter.js';
import reduceDemo from '../../utils/general/reduce.js';
import flattenDemo from '../../utils/general/flatten.js';
import callApplyBindPolyfillsDemo from '../../utils/general/polyfills.js';
import promiseAllDemo from '../../utils/general/promiseAll.js';

const Demo = () => {
  useEffect(() => {
    // uncomment to run specific demo
    // copyDeepDemo();
    // pipeDemo();
    // composeDemo();
    // sumCurryDemo();
    // forEachDemo();
    // mapDemo();
    // filterDemo();
    // reduceDemo();
    // flattenDemo();
    // callApplyBindPolyfillsDemo();
    // promiseAllDemo();
  }, []);

  const onSearch = debounce((e: any) => {
    console.log('search query: ', e?.target?.value);
  }, 1000);

  /*
        Note: in this example, with minimal throttle implementation,
        we can observe that since this invokes the fn periodically,
        only the keystrokes within the 1 sec delay are logged. But as we stop
        typing and no further events are logged, some data may be lost.
      */
  const onLazySearch = throttle((e: any) => {
    console.log('lazy search query: ', e?.target?.value);
  }, 1000);

  /*
        Modifying the basic throttle mechanism, so that args are maintained
        for any invocation attempts during pause period. And instead of simply
        unpausing, first we check for waiting args and invoke the fn, then
        reset the timer. We unpause only if there are no waiting args.
      */
  const onAdvancedLazySearch = advancedThrottle((e: any) => {
    console.log('adv lazy search query: ', e?.target?.value);
  }, 1000);

  const onFactorialSearch = (e: any) => {
    const num = parseInt(e?.target?.value);

    if (isNaN(num)) {
      return;
    }

    console.log(`${num}! = ${getFactorial(num)}`);
  };

  const getFactorial = memoize((num: number): number => {
    console.log('function invoked');
    if (num === 0 || num === 1) {
      return num;
    }

    return num * getFactorial(num - 1);
  });
  return (
    <>
      <Link to={'/'}>Home</Link>
      <h2>Demo</h2>
      <div>
        <input placeholder="Search" onKeyUp={onSearch} />
        <input placeholder="Lazy Search" onKeyUp={onLazySearch} />
        <input
          placeholder="Advanced Lazy Search"
          onKeyUp={onAdvancedLazySearch}
        />
        <input placeholder="Factorial" onKeyUp={onFactorialSearch} />
      </div>
    </>
  );
};

export default Demo;
