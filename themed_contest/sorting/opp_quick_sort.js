// Time Complexity => O()
// Space Complexity => O()
let array;

function sort(start, end) {
  if (start < end) {
    let pivot_index = getPivot(start, end);
    sort(start, pivot_index - 1);
    sort(pivot_index + 1, end);
  }
}

function getPivot(start, end) {
  let i = start;
  let j = end;
  let pivot_index = end;

  while (i < j) {
    while (array[i] > array[pivot_index]) {
      i++;
    }

    while (array[j] <= array[pivot_index]) {
      j--;
    }

    if (i < j) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  [array[i], array[pivot_index]] = [array[pivot_index], array[i]];
  return i;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  array = input_arr[1].trim().split(" ").map(Number);
  sort(0, array.length - 1);
  console.log(array.join(" "));
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
2 3 1 4 5`);
