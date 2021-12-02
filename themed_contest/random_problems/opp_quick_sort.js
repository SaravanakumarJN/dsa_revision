// Time Complexity => O()
// Space Complexity => O()
let array;
function quick_sort(i, j) {
  if (i < j) {
    let pivot_index = getPivot(i, j);
    quick_sort(i, pivot_index - 1);
    quick_sort(pivot_index + 1, j);
  } else {
    return;
  }
}

function getPivot(i, j) {
  let start = i;
  let end = j;
  let swap_index = Math.floor(Math.random() * (j - i) + i);
  [array[end], array[swap_index]] = [array[swap_index], array[end]];
  let pivot = j;

  while (start < end) {
    while (array[start] > array[pivot]) {
      start++;
    }

    while (array[end] <= array[pivot]) {
      end--;
    }

    if (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
    }
  }

  [array[start], array[pivot]] = [array[pivot], array[start]];
  return start;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");
  array = input_arr[1].trim().split(" ").map(Number);

  quick_sort(0, array.length - 1);
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

runProgram(`17
391 861 836 1 66 686 388 214 467 933 354 685 683 829 519 866 364`);
