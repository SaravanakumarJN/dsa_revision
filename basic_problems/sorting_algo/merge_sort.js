let array = [3, 2, 5, 1];

function m_sort(array, start, end) {
  if (start == end) {
    return [array[start]];
  }

  let mid = Math.floor((start + end) / 2);
  let left = m_sort(array, start, mid);
  let right = m_sort(array, mid + 1, end);
  return merge_array(left, right);
}

function merge_array(array1, array2) {
  let sorted = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      sorted.push(array1[i]);
      i++;
    } else {
      sorted.push(array2[j]);
      j++;
    }
  }

  if (i < array1.length) {
    for (let k = i; k < array1.length; k++) {
      sorted.push(array1[k]);
    }
  }
  if (j < array2.length) {
    for (let k = j; k < array2.length; k++) {
      sorted.push(array2[k]);
    }
  }

  return sorted;
}

console.log(m_sort(array, 0, array.length - 1));
