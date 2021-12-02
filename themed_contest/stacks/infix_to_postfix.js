// Time Complexity => O()
// Space Complexity => O()

/*
  => brackets expressions first
  => precedence of operators


  result = ab+c-def-*g/+hij/*+

  stack = +

  1. if op bracken
  push to stack

  2. if close brack
  pop till open and add it to result
  then pop open brack

  1 . prec >=
  pop and add to result

  2 prec < 
  add to stack


*/

function solve(string) {
  let operators_precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
  };

  let operator_associativity = {
    "+": "lr",
    "-": "lr",
    "*": "lr",
    "/": "lr",
    "^": "rl",
  };

  let i = 0;
  let stack = [];
  let result = "";
  while (i < string.length) {
    let current_elemnt = string[i];

    // if open bracket
    if (current_elemnt == "(") {
      stack.push(current_elemnt);
    }
    // if close bracket
    else if (current_elemnt == ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        let ele = stack.pop();
        result += ele;
      }
      stack.pop();
    }
    // if operand
    else if (!operators_precedence[current_elemnt]) {
      result += current_elemnt;
    }
    // if any operand
    else {
      while (
        stack.length &&
        (operators_precedence[stack[stack.length - 1]] >
          operators_precedence[current_elemnt] ||
          (operators_precedence[stack[stack.length - 1]] ==
            operators_precedence[current_elemnt] &&
            operator_associativity[current_elemnt] == "lr"))
      ) {
        let ele = stack.pop();
        result += ele;
      }
      stack.push(current_elemnt);
    }
    i++;
  }

  while (stack.length) {
    let ele = stack.pop();
    result += ele;
  }

  console.log(result);
}

function runProgram(input) {
  let string = input.trim();

  solve(string);
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

runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
