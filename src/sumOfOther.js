const sumOfOther = (array) => {
  if (array.length < 2) {
    return array;
  } if (array.length === 2) {
    return array.reverse();
  }

  let sum = 0;
  for (let i = 0, len = array.length; i < len; i += 1) {
    sum += array[i];
  }

  for (let i = 0, len = array.length; i < len; i += 1) {
    array[i] = sum - array[i];
  }

  return array;
};

module.exports = sumOfOther;
