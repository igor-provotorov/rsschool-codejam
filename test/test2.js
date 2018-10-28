const assert = require('assert');
const make = require('../src/make');

const foo = (a, b) => a + b;
const foo2 = (a, b) => a * b;
const foo3 = (a, b) => (a * 2) + (3 * b);

describe('make', () => {
  it('should return 777', () => {
    const result = make(15)(34, 21, 666)(41)(foo);
    assert.deepEqual(result, 777);
  });
  it('should return 60', () => {
    const result = make(1)(2, 3)(10)(foo2);
    assert.deepEqual(result, 60);
  });
  it('should return 296', () => {
    const result = make(1)(2, 3)(4, 5, 6)(foo3);
    assert.deepEqual(result, 296);
  });
});
