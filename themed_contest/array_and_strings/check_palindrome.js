// Time Complexity => O()
// Space Complexity => O()
function check_palindrome(str) {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return "No";
    }
  }

  return "Yes";
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");
  let string = input_arr[1].trim();

  console.log(check_palindrome(string));
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

runProgram(`6
nrupul`);
