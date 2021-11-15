/*
https://oj.masaischool.com/contest/2141/problem/03
*/

// Time Complexity => O()
// Space Complexity => O()

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    let [rows, cols] = input_arr[i].trim().split(" ").map(Number);

    let matrix = [];
    for (let j = i + 1; j <= i + rows; j++) {
      let row = input_arr[j].trim().split(" ").map(Number);
      matrix.push(row);
    }

    let memo = {};
    function max_value_move(board, row, col) {
      if (row == board.length) {
        return 0;
      }
      if (memo[`${row}_${col}`]) {
        return memo[`${row}_${col}`];
      }

      let down = max_value_move(board, row + 1, col);
      let down_right = 0;
      let down_left = 0;
      if (col + 1 < board[0].length) {
        down_right = max_value_move(board, row + 1, col + 1);
      }
      if (col - 1 >= 0) {
        down_left = max_value_move(board, row + 1, col - 1);
      }
      let ans = board[row][col] + Math.max(down, down_left, down_right);
      memo[`${row}_${col}`] = ans;
      return ans;
    }
    let max = 0;
    for (let i = 0; i < matrix[0].length; i++) {
      max = Math.max(max, max_value_move(matrix, 0, i));
    }
    console.log(max);
    i = i + rows;
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
6 5
3 1 7 4 2
2 1 3 1 1
1 2 2 1 8
2 2 1 5 3
2 1 4 4 4
5 2 7 5 1`);
