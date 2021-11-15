// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let array = input.trim().split(" ").map(Number);

  let obj = {};
  array.forEach((item) => {
    if (!obj[item]) {
      obj[item] = 1;
    }
  });

  for (let i = 1; i < Infinity; i++) {
    if (!obj[i]) {
      console.log(i);
      break;
    }
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

runProgram(`4 5 2 1 3`);
