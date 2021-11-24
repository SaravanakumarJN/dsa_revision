// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  input = Number(input);

  let covered = Math.floor(input / 5);
  let remaining = input % 5;
  if (remaining) {
    covered++;
  }
  console.log(covered);
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

runProgram(`26`);
