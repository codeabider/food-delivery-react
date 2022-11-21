const run = () => {
  const printDetails = function (name, age) {
    return `${name} is ${this.status} at ${age} years old.`;
  };

  /*
  Call, apply, and bind are the functions that help you change the context
  of the this keyword present inside the invoking function.
  each function can be called in different ways – for example,
  with apply you can execute a function with an array of arguments, and
  with the call function you can execute the same but the arguments are
  spread via commas.
  */
  printDetails.call({ status: 'single' }, 'Rose', 23);
  // O/P: 'Rose is single at 23 years old.'
  printDetails.apply({ status: 'single' }, ['Rose', 23]);
  // O/P: 'Rose is single at 23 years old.'
  printDetails.bind({ status: 'single' }, 'Rose', 23)();
  // O/P: 'Rose is single at 23 years old.'

  const boundPrint = printDetails.bind({ status: 'unknown' }); // bind the context first
  boundPrint('Snow', 42); // call later
  // O/P: 'Snow is unknown at 42 years old.'

  Function.prototype.customBind = function (context) {
    // `this` => entity over which `customBind` is called, which should be a function in this case
    if (typeof this !== 'function') {
      throw new Error(`${this} cannot be bound as it's not callable`);
    }

    context.fn = this;

    console.log({ context });

    return function (...args) {
      return context.fn(...args);
    };
  };

  Function.prototype.customCall = function (context, ...args) {
    if (typeof this !== 'function') {
      throw new Error(`${this} cannot be bound as it's not callable`);
    }

    context.fn = this;
    return context.fn(...args);
  };

  Function.prototype.customApply = function (context, args) {
    if (typeof this !== 'function') {
      throw new Error(`${this} cannot be bound as it's not callable`);
    }

    if (!Array.isArray(args)) {
      throw new TypeError('CreateListFromArrayLike called on non-object');
    }

    context.fn = this;
    return context.fn(...args);
  };
};

export default run;
