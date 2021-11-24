// Time Complexity => O()
// Space Complexity => O()
function check_skew(num) {
  let odd_divisor = 0;
  let even_divisors = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      if (num % i == 0) {
        even_divisors++;
      }
    } else {
      if (num % i == 0) {
        odd_divisor++;
      }
    }
  }

  return odd_divisor == even_divisors
    ? "Not Skewed"
    : odd_divisor > even_divisors
    ? "Odd Skewed"
    : "Even Skewed";
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    console.log(check_skew(Number(input_arr[i])));
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
4
6
11`);
