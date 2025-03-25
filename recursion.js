const fibs = (number) => {
  const array = [0];

  if (number < 1) {
    return [];
  }

  for (let i = 1; i < number; i++) {
    if (array.length < 2) {
      array.push(i + array[i - 1]);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }
  return array;
};

// console.log(fibs(1));

const fibsRec = (number, array) => {
  if (array.length >= number) {
    return array.slice(0, number);
  }

  return fibsRec(number, [...array, array[array.length - 1] + array[array.length - 2]]);
};

console.log(fibsRec(8, [0, 1]));
