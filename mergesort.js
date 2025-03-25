const input = [3, 2, 1, 13, 8, 5, 0, 1];
const output = [0, 1, 1, 2, 3, 5, 8, 13];

const input2 = [105, 79, 100, 110];
const output2 = [79, 100, 105, 110];

const merge = (a, b) => {
  const newArray = [];

  let aIndex = 0;
  let bIndex = 0;
  const aEnd = a.length;
  const bEnd = b.length;

  while (aIndex < aEnd || bIndex < bEnd) {
    if (a[aIndex] >= b[bIndex]) {
      newArray.push(b[bIndex]);
      bIndex++;
    }
    if (a[aIndex] <= b[bIndex]) {
      newArray.push(a[aIndex]);
      aIndex++;
    }
    if (aIndex === aEnd && b[bIndex]) {
      newArray.push(b[bIndex]);
      bIndex++;
    }
    if (bIndex === bEnd && a[aIndex]) {
      newArray.push(a[aIndex]);
      aIndex++;
    }
  }

  return newArray;
};

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  } else {
    const len = Math.round(array.length / 2);
    const left = [...array.slice(0, len)];
    const right = [...array.slice(len, array.length)];

    return merge(mergeSort(left), mergeSort(right));
  }
};

console.log(mergeSort(input), output);
console.log(mergeSort(input2), output2);
