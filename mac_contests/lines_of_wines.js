// Time Complexity => O()
// Space Complexity => O()
let memo = {};
function max_profit(costs, i, top, bottom) {
  if (memo[`${i}_${top}_${bottom}`]) {
    return memo[`${i}_${top}_${bottom}`];
  }

  if (i == costs.length + 1 || top > bottom) {
    return 0;
  }

  let top_move = i * costs[top] + max_profit(costs, i + 1, top + 1, bottom);
  let bottom_move =
    i * costs[bottom] + max_profit(costs, i + 1, top, bottom - 1);

  memo[`${i}_${top}_${bottom}`] = Math.max(top_move, bottom_move);
  return memo[`${i}_${top}_${bottom}`];
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i += 2) {
    let wines = input_arr[i + 1].trim().split(" ").map(Number);

    console.log(max_profit(wines, 1, 0, wines.length - 1));
    memo = {};
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
3 5 2 4`);
