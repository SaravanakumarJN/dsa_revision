// Time Complexity => O()
// Space Complexity => O()
function max_profit(length, cost, available) {
  let tab = [];

  for (let i = 0; i < length.length; i++) {
    tab[i] = [];
    for (let j = 0; j <= available; j++) {
      let with_ = 0;
      let without = 0;

      if (length[i] <= j) {
        with_ = cost[i] + tab[i][j - length[i]];
      }
      if (i > 0) {
        without = tab[i - 1][j];
      }

      tab[i][j] = Math.max(with_, without);
    }
  }
  console.log(tab);

  return tab[tab.length - 1][tab[0].length - 1];
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  let available = Number(input_arr[0]);
  let cost = input_arr[1].trim().split(" ").map(Number);
  let length = cost.map((_, i) => i + 1);

  let ans = max_profit(length, cost, available);
  console.log(ans);
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

runProgram(`4
3 1 5 8`);
