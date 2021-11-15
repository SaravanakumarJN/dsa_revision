function runProgram(input) {
  let input_arr = input.trim().split("\n");
  let array = input_arr[1].trim().split(" ").map(Number);

  function pivoting(array, start, end) {
    let i = start;
    let j = end;
    let pivot = end;

    while (i < j) {
      while (array[j] >= array[pivot]) {
        j--;
      }
      while (array[i] < array[pivot]) {
        i++;
      }
      if (i < j) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    [array[i], array[pivot]] = [array[pivot], array[i]];

    return i;
  }

  function quick_sort(array, start, end) {
    if (start < end) {
      let pivoted_point = pivoting(array, start, end);
      quick_sort(array, start, pivoted_point - 1);
      quick_sort(array, pivoted_point + 1, end);
    } else {
      return;
    }
  }

  quick_sort(array, 0, array.length - 1);
  console.log(array.join(" "));
}
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//   read += input;
// });
// process.stdin.on("end", function () {
//   read = read.replace(/\n$/, "");
//   runProgram(read);
// });
// process.on("SIGINT", function () {
//   read = read.replace(/\n$/, "");
//   runProgram(read);
//   process.exit(0);
// });

runProgram(`5
3 5 0 9 8`);
