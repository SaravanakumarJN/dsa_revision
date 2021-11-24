let string = "[()]{}{[()()]()}";
// let string = "[(])";

let stack = [];

let open_brack_lookup = {
  "{": 1,
  "[": 1,
  "(": 1,
};

let pair_brack_lookup = {
  ")": "(",
  "}": "{",
  "]": "[",
};

let i = 0;
let flag = true;
while (i < string.length) {
  if (open_brack_lookup[string[i]]) {
    stack.push(string[i]);
  } else {
    if (
      stack.length &&
      stack[stack.length - 1] == pair_brack_lookup[string[i]]
    ) {
      stack.pop();
    } else {
      flag = false;
      break;
    }
  }
  i++;
}

console.log(flag);
