// Time Complexity => O()
// Space Complexity => O()
function pge(array) {
  let i = 0;
  let stack = [];
  let ans = [];
  while (i < array.length) {
    while (stack.length && stack[stack.length - 1][0] <= array[i]) {
      stack.pop();
    }
    if (stack.length) {
      ans[i] = stack[stack.length - 1][1];
    } else {
      ans[i] = -1;
    }
    stack.push([array[i], i + 1]);
    i++;
  }

  return ans;
}

function nge(array) {
  let i = array.length - 1;
  let stack = [];
  let ans = [];
  while (i >= 0) {
    while (stack.length && stack[stack.length - 1][0] <= array[i]) {
      stack.pop();
    }
    if (stack.length) {
      ans[i] = stack[stack.length - 1][1];
    } else {
      ans[i] = -1;
    }
    stack.push([array[i], i + 1]);
    i--;
  }

  return ans;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");
  let array = input_arr[1].trim().split(" ").map(Number);

  let pge_ = pge(array);
  let nge_ = nge(array);
  // console.log(pge_);
  // console.log(nge_);

  let ans = pge_.map((ele, i) => ele + nge_[i]);

  console.log(ans.join(" "));
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

runProgram(`5
5 4 1 3 2`);
