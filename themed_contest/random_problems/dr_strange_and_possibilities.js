// Time Complexity => O()
// Space Complexity => O()
function print_subs(num, i, subs_array) {
  if (i > num) {
    return;
  }
  subs_array.push(i);
  console.log(subs_array.join(" "));
  print_subs(num, i + 1, subs_array);
  subs_array.pop();
  print_subs(num, i + 1, subs_array);
}

function runProgram(input) {
  input = Number(input);

  console.log("");
  print_subs(input, 1, []);
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
