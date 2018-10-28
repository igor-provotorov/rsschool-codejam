const assert = require('assert');
const recursion = require('../src/recursion');

describe('recursion', () => {
  it('test 1', () => {
    assert.deepEqual(
      recursion({
        value: 100,
        left: { value: 90, left: { value: 70 }, right: { value: 99 } },
        right: { value: 120, left: { value: 110 }, right: { value: 130 } },
      }),
      [[100], [90, 120], [70, 99, 110, 130]],
      );
  });
  it('test 2', () => {
    assert.deepEqual(
      recursion({
        value: 95,
        left: { value: 63, left: { value: 10 }, right: { value: 8 } },
        right: { value: 51, left: { value: 6 }, right: { value: 2 } },
      }),
      [[95], [63, 51], [10, 8, 6, 2]],
      );
  });
  it('test 3', () => {
    assert.deepEqual(
      recursion({
        value: 12,
        left: { value: 15, left: { value: 37 }, right: { value: 39 } },
        right: { value: 58, left: { value: 99 }, right: { value: 101 } },
      }),
      [[12], [15, 58], [37, 39, 99, 101]],
      );
  });
  it('test 4', () => {
    assert.deepEqual(
      recursion({
        value: 3,
        left: {
          value: 12,
          left: { value: 19, left: { value: 7 }, right: { value: 31 } },
          right: { value: 62, left: { value: 90 }, right: { value: 50 } },
        },
        right: {
          value: 14,
          left: { value: 81, left: { value: 83 }, right: { value: 500 } },
          right: { value: 65, left: { value: 128 }, right: { value: 13 } },
        },
      }),
      [[3], [12, 14], [19, 62, 81, 65], [7, 31, 90, 50, 83, 500, 128, 13]],
      );
  });
  it('test 5', () => {
    assert.deepEqual(
      recursion({
        value: 105,
        left: {
          value: 212,
          left: { value: 903, left: { value: 651 }, right: { value: 728 } },
          right: { value: 824, left: { value: 315 }, right: { value: 303 } },
        },
        right: {
          value: 428,
          left: { value: 293, left: { value: 655 }, right: { value: 728 } },
          right: { value: 511, left: { value: 511 }, right: { value: 307 } },
        },
      }),
      [[105], [212, 428], [903, 824, 293, 511], [651, 728, 315, 303, 655, 728, 511, 307]],
      );
  });
});
