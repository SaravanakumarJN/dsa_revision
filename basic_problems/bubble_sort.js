let array = [1, 2, 1, 5, 2, 3, 4];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

console.log(array);
