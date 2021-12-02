// Time Complexity => O()
// Space Complexity => O()
function can_y_be_made_from_x(x, y) {
  if (y.length % x.length == 0) {
    let n = y.length / x.length;
    for (let i = 0; i < n; i++) {
      y = y.split(x).join("");
    }
    if (y.length) {
      return false;
    }
    return true;
  } else {
    return false;
  }
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i += 2) {
    let string1 = input_arr[i].trim();
    let string2 = input_arr[i + 1].trim();

    console.log(can_y_be_made_from_x(string1, string2) ? "Yes" : "No");
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

runProgram(`3
aac
aaabab
abcdef
abcdef
abcxyz
abcxyababcxyzcxyzzabcxyz`);
