// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let string = input.trim();

  let count = 0;
  for (let i = 0; i < string.length; i++) {
    let subs = "";
    for (let j = i; j < string.length; j++) {
      subs += string[j];
      if (subs.length == 1) {
        count++;
      } else if (subs[subs.length - 1] == subs[subs.length - 2]) {
        count++;
      } else {
        break;
      }
    }
  }

  console.log(count);
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

runProgram(`aaaba`);
