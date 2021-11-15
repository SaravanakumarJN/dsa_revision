/*
https://oj.masaischool.com/contest/2141/problem/02
*/

// Time Complexity => O()
// Space Complexity => O()
function max_money_exchange(money) {
  if (money <= 2) {
    return money;
  }

  return Math.max(
    money,
    max_money_exchange(Math.floor(money / 2)) +
      max_money_exchange(Math.floor(money / 3)) +
      max_money_exchange(Math.floor(money / 4))
  );
}

function runProgram(input) {
  let input_arr = input.trim().split("\n").map(Number);

  for (let i = 0; i < input_arr.length; i++) {
    let ans = max_money_exchange(input_arr[i]);
    console.log(ans);
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

runProgram(`12
2`);
