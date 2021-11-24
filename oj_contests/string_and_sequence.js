// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let input_arr = input.trim().split("\n");
  let string = input_arr[0].trim();
  let sequence = input_arr[1].trim();

  let req_string = "";
  for (let i = 0; i < string.length; i++) {
    let j = i;
    let k = 0;
    let flag = true;
    while (k < sequence.length) {
      if (string[j] != sequence[k]) {
        flag = false;
        break;
      }
      k++;
      j++;
    }
    if (flag) {
      if (req_string[req_string.length - 1] != "X") {
        req_string += "X";
      }
      i = j - 1;
    } else {
      req_string += string[i];
    }
  }

  console.log(req_string);
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

runProgram(`aaaaa
aa`);
