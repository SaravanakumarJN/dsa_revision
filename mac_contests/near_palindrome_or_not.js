// Time Complexity => O()
// Space Complexity => O()
function near_palindrome_check(string, k) {
  let count = 0;
  for (let i = 0, j = string.length - 1; i < j; i++, j--) {
    if (string[i] != string[j]) {
      count++;
    }
  }

  return count <= k ? "True" : "False";
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i += 2) {
    let [_, k] = input_arr[i].split(" ").map(Number);
    let string = input_arr[i + 1].trim();

    console.log(near_palindrome_check(string, k));
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

runProgram(`2
5 3
abdefaa
6 2
abcdef`);
