// Time Complexity => O()
// Space Complexity => O()
function nge(array) {
  let stack = [];
  let ans = [];

  let i = array.length - 1;
  while (i >= 0) {
    while (stack.length && stack[stack.length - 1] <= array[i]) {
      stack.pop();
    }
    if (stack.length) {
      ans[i] = stack[stack.length - 1];
    } else {
      ans[i] = -1;
    }
    stack.push(array[i]);
    i--;
  }

  console.log(ans.join(" "));
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i += 2) {
    let array = input_arr[i + 1].trim().split(" ").map(Number);
    nge(array);
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

runProgram(`1
4
1 3 2 4`);
