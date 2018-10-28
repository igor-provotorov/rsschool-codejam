const assert = require('assert');
const sumOfOther = require('../src/sumOfOther');


describe('sumOfOthers', () => {
  it('should return []', () => {
    const result = sumOfOther([]);
    assert.deepEqual(result, []);
  });

  it('should return [15]', () => {
    const result = sumOfOther([15]);
    assert.deepEqual(result, [15]);
  });

  it('should return [2,1]', () => {
    const result = sumOfOther([1, 2]);
    assert.deepEqual(result, [2, 1]);
  });

  it('should return [8, 7, 6, 9]', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });

  it('should return [1267, 1255, 1284, 589, 1278, 767, 1288]', () => {
    const result = sumOfOther([21, 33, 4, 699, 10, 521, 0]);
    assert.deepEqual(result, [1267, 1255, 1284, 589, 1278, 767, 1288]);
  });
});
