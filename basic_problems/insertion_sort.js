let array = [1, 2, 1, 5, 2, 3, 4];

for (let i = 0; i < array.length; i++) {
  let low_index = i;
  for (let j = i + 1; j < array.length; j++) {
    if (array[low_index] > array[j]) {
    }
  }
  [array[i], array[low_index]] = [array[low_index], array[i]];
}

console.log(array);
