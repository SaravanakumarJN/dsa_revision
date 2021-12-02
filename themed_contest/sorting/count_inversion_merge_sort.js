// Time Complexity => O()
// Space Complexity => O()
let array;
let steps_to_sort = 0;

function sort(start, end) {
  if (start == end) {
    return [array[start]];
  }

  let mid = Math.floor((start + end) / 2);
  let left = sort(start, mid);
  let right = sort(mid + 1, end);
  return merger(left, right);
}

function merger(array1, array2) {
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
  let sorted_array = sort(0, array.length - 1);
  console.log(sorted_array);
}
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/,"")
//    runProgram(read);
// });
// process.on("SIGINT", function () {
//     read = read.replace(/\n$/,"")
//     runProgram(read);
//     process.exit(0);
// });

runProgram(`4
8 4 2 1`);
