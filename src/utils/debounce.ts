const debounce = (fn: any, delay = 200) => {
  let debounceTimeout: any;

  const debouncedFn = (...args: any) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => fn(...args), delay);
  };

  return debouncedFn;
};

export default debounce;
