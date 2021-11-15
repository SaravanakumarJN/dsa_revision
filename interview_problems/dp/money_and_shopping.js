/*
https://oj.masaischool.com/contest/2141/problem/05
*/

// Time Complexity => O()
// Space Complexity => O()

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    let no_shops = Number(input_arr[i].trim());

    let shops = [];
    for (let j = i + 1; j <= i + no_shops; j++) {
      let shop = input_arr[j].trim().split(" ").map(Number);
      shops.push(shop);
    }

    let memo = {};
    function min_purchase_cost(shops, row, col) {
      if (row == shops.length) {
        return 0;
      }

      if (memo[`${row}_${col}`]) {
        return memo[`${row}_${col}`];
      }

      let down_left1 = Infinity;
      let down_right1 = Infinity;
      let down_left2 = Infinity;
      let down_right2 = Infinity;
      if (col + 1 < shops[0].length) {
        down_right1 = min_purchase_cost(shops, row + 1, col + 1);
      }
      if (col + 2 < shops[0].length) {
        down_right2 = min_purchase_cost(shops, row + 1, col + 2);
      }
      if (col - 1 >= 0) {
        down_left1 = min_purchase_cost(shops, row + 1, col - 1);
      }
      if (col - 2 >= 0) {
        down_left2 = min_purchase_cost(shops, row + 1, col - 2);
      }
      let ans =
        shops[row][col] +
        Math.min(down_left1, down_right1, down_left2, down_right2);
      memo[`${row}_${col}`] = ans;

      return ans;
    }

    let min = Infinity;
    for (let j = 0; j < shops[0].length; j++) {
      min = Math.min(min, min_purchase_cost(shops, 0, j));
    }

    console.log(min);
    i = i + no_shops;
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
3
1 50 50
50 50 50
1 50 50`);
