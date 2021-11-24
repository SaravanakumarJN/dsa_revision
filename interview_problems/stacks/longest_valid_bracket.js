let string = "()(()))))";

let stack = [-1];
let i = 0;
let max = -Infinity;
while (i < string.length) {
  if (string[i] == "(") {
    stack.push(i);
  } else {
    if (stack.length) {
      stack.pop();
    }

    if (stack.length) {
      max = Math.max(max, i - stack[stack.length - 1]);
    } else {
      stack.push(i);
    }
  }
  i++;
}

console.log(max);
