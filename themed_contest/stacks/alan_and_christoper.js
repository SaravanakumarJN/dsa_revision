// Time Complexity => O()
// Space Complexity => O()
function decrypt(string) {
  let stack = [];
  let i = 0;
  while (i < string.length) {
    if (string[i] == "#") {
      stack.pop();
    } else {
      stack.push(string[i]);
    }
    i++;
  }

  console.log(stack.join(""));
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    let string = input_arr[i].trim();
    decrypt(string);
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
ab#d
a#bc
#fho##zyn#bk#c#urbe`);
