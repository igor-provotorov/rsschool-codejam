const sumOfOther = (array) => {
  if (array.length < 2) {
    return array;
  }
  if (array.length === 2) {
    return array.reverse();
  }

  return array.map(item => array.reduce((acc, current) => acc + current) - item);
};

module.exports = sumOfOther;
