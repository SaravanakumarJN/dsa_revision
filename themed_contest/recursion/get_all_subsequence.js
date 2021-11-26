// Time Complexity => O()
// Space Complexity => O()
function get_subseq(string, i, subs) {
  if (i == string.length) {
    return;
  }

  subs.push(string[i]);
  console.log(subs.join(""));
  get_subseq(string, i + 1, subs);
  subs.pop();
  get_subseq(string, i + 1, subs);
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  let string = input_arr[1].trim();
  get_subseq(string, 0, []);
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

runProgram(`4
abcd`);
