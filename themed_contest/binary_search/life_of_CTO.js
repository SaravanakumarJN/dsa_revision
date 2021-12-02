// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let input_arr = input.trim().split("\n");

  let array = input_arr[1].trim().split(" ");

  let buggy_index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 1) {
      buggy_index = i;
      break;
    }
  }

  console.log(buggy_index);
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
0 0 0 0 0`);
