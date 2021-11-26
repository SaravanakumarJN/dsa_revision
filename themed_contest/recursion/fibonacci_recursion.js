// Time Complexity => O()
// Space Complexity => O()
let memo = {};

function fib_of_x(n) {
  if (memo[n]) {
    return memo[n];
  }

  if (n == 0) {
    return 0;
  } else if (n == 1 || n == 2) {
    return 1;
  }
  memo[n] = fib_of_x(n - 2) + fib_of_x(n - 1);
  return memo[n];
}

function runProgram(input) {
  input = Number(input);

  console.log(fib_of_x(input));
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

runProgram(`4`);
