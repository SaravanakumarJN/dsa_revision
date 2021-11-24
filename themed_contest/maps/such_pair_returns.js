// Time Complexity => O()
// Space Complexity => O()
function sum_equal_k(array, k) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    let sum = array[i] + array[j];
    if (sum == k) {
      return true;
    } else if (sum < k) {
      i++;
    } else {
      j--;
    }
  }

  return false;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i += 2) {
    let [_, k] = input_arr[i].trim().split(" ").map(Number);
    let array = input_arr[i + 1]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);

    console.log(sum_equal_k(array, k) ? "1" : "-1");
  }
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

runProgram(`1
5 2
3 4 0 2 7`);
