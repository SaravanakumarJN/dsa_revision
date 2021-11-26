// Time Complexity => O()
// Space Complexity => O()
function get_dis_sorted_subs(num, i, subs) {
  if (i > num) {
    return;
  }

  subs.push(i);
  console.log(subs.join(" "));
  get_dis_sorted_subs(num, i + 1, subs);
  subs.pop();
  get_dis_sorted_subs(num, i + 1, subs);
}

function runProgram(input) {
  input = Number(input);

  console.log("");
  get_dis_sorted_subs(input, 1, []);
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

runProgram(`3`);
