let array = [10, 11, 5, 5, 2, 4, 8, 3, 5];
quick_sort(array, 0, array.length - 1);
console.log(array);

function quick_sort(array, start, end) {
  if (start >= end) {
    return;
  }
  let sorted_index = get_sorted_index(array, start, end);
  // console.log(sorted_index);
  quick_sort(array, start, sorted_index - 1);
  quick_sort(array, sorted_index + 1, end);
}

function get_sorted_index(array, start, end) {
  let i = start;
  let j = end;
  let pivot = array[start];

  while (i < j) {
    while (array[i] <= pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }

    if (i < j) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  [array[j], array[start]] = [array[start], array[j]];
  return j;
}
