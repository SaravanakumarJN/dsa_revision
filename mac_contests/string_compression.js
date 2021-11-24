// Time Complexity => O()
// Space Complexity => O()
function string_compression(string) {
  let zero_count = 0;
  let one_count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == 1) {
      one_count++;
    } else {
      zero_count++;
    }
  }

  return Math.abs(zero_count - one_count);
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i += 2) {
    let string = input_arr[i + 1].trim();

    console.log(string_compression(string));
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
5
11000
6
100001`);
