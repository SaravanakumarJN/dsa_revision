// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let string = input.trim();

  let open_bracket = {
    "[": 1,
    "(": 1,
    "{": 1,
  };

  let pair_lookup = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  let i = 0;
  let stack = [];
  let flag = true;
  while (i < string.length) {
    if (open_bracket[string[i]]) {
      stack.push(string[i]);
    } else if (pair_lookup[string[i]]) {
      if (
        !stack.length ||
        (stack.length && stack[stack.length - 1] != pair_lookup[string[i]])
      ) {
        flag = false;
        break;
      } else {
        stack.pop();
      }
    }
    i++;
  }

  if (flag && !stack.length) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
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

runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]]`);
