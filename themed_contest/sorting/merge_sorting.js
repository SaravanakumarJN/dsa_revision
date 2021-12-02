// Time Complexity => O()
// Space Complexity => O()
let array;
function sort(start, end) {
  if (start == end) {
    return [array[start]];
  }

  let mid = Math.floor((start + end) / 2);
  let left_sorted = sort(start, mid);
  let right_sorted = sort(mid + 1, end);
  return merge(left_sorted, right_sorted);
}

function merge(array1, array2) {
  let i = 0;
  let j = 0;
  let sorted = [];
  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
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

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  array = input_arr[1].trim().split(" ").map(Number);
  console.log(sort(0, array.length - 1).join(" "));
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});

runProgram(`5
3 5 0 9 8`);
