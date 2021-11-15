function min_steps(array, i, max, count) {
  if (count !== 0 && array[i] == max) {
    return 0;
  }
  if (count == array.length) {
    return Infinity;
  }

  let right_move_index = (i + array[i]) % array.length;
  let left_move_index =
    i - array[i] >= 0 ? i - array[i] : array.length + (i - array[i]);

  let right_opt = 1 + min_steps(array, right_move_index, max, count + 1);
  let left_opt = 1 + min_steps(array, left_move_index, max, count + 1);

  return Math.min(right_opt, left_opt);
}

function ArrayChallenge(arr) {
  let max = arr[0];
  let max_index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      max_index = i;
    }
  }

  let possible = false;
  for (let i = 0; i < arr.length; i++) {
    let right_move = (i + arr[i]) % arr.length;
    let left_move = i - arr[i] >= 0 ? i - arr[i] : arr.length + (i - arr[i]);
    if (arr[right_move] == max || arr[left_move] == max) {
      possible = true;
      break;
    }
  }

  if (!possible) {
    return -1;
  } else {
    let ans = min_steps(arr, max_index, max, 0);
    return ans === Infinity ? -1 : ans;
  }
}
console.log(ArrayChallenge(array));
