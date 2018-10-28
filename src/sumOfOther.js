const sumOfOther = (array) => {
  if (array.length < 2) {
    return array;
  } else if (array.length === 2) {
    return array.reverse();
  }

  let sum = 0;
  for (let i = 0, len = array.length; i < len; i++) {
    sum += array[i];
  }

  for (let i = 0, len = array.length; i < len; i++) {
    array[i] = sum - array[i];
  }

  return array;
}
