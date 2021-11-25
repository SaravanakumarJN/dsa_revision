// Time Complexity => O()
// Space Complexity => O()
function can_pali(string) {
  let obj = {};

  for (let i = 0; i < string.length; i++) {
    let key = string[i];
    if (obj[key] === undefined) {
      obj[key] = 1;
    } else {
      obj[key] = obj[key] + 1;
    }
  }

  let allowance = 0;
  for (let key in obj) {
    if (obj[key] % 2 != 0) {
      allowance++;
    }
  }

  console.log(allowance <= 1 ? "Possible!" : "Not Possible!");
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i += 2) {
    let string = input_arr[i + 1].trim();
    can_pali(string);
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
7
giggbgb`);
