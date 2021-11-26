// Time Complexity => O()
// Space Complexity => O()
let board;

function validate_move(x, y, n) {
  // row amd col check
  for (let i = 0; i < n; i++) {
    if (board[i][y] == "Q") {
      return false;
    }
    if (board[x][i] == "Q") {
      return false;
    }
  }

  // dia check
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // main diagonal check
      if (i - j == x - y && board[i][j] == "Q") {
        return false;
      }
      if (i + j == x + y && board[i][j] == "Q") {
        return false;
      }
    }
  }

  return true;
}

let count = 0;
function solve_n_queens(n, i) {
  if (i == n) {
    count++;
    return;
  }

  for (let j = 0; j < n; j++) {
    if (validate_move(i, j, n)) {
      board[i][j] = "Q";
      solve_n_queens(n, i + 1);
    }
    board[i][j] = ".";
  }
}

function runProgram(input) {
  input = Number(input);

  board = new Array(input).fill(0).map(() => new Array(input).fill("."));
  solve_n_queens(input, 0);
  console.log(count);
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

runProgram(`1`);
