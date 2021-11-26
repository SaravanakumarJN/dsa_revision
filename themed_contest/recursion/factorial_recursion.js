// Time Complexity => O()
// Space Complexity => O()
function fact_x(n) {
  if (n == 0) {
    return 1;
  }
  return n * fact_x(n - 1);
}

function runProgram(input) {
  input = Number(input);

  console.log(fact_x(input));
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

runProgram(`5`);
