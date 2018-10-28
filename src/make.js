const make = (...args) => {
  const arr = [];
  arr.push(...args);

  const closureFunction = (...args2) => {
    if (typeof args2[0] === 'function') {
      const foo = args2[0];
      return arr.reduce((acc, item) => foo(acc, item));
    }
    arr.push(...args2);
    return closureFunction;
  };

  return closureFunction;
};

module.exports = make;
