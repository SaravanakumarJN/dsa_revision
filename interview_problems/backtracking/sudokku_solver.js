let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// let board = [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]

let to_check_points = [];
board.forEach((_, i) => {
  board[i].forEach((_, j) => {
    if (board[i][j] == ".") {
      to_check_points.push([i, j]);
    }
  });
});

function indi_square_validator(row, col, value) {
  // row validation
  for (let i = 0; i < board[0].length; i++) {
    if (board[row][i] == value) {
      return false;
    }
  }

  // column validation
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] == value) {
      return false;
    }
  }

  // 3x3 validation
  let start_row = row < 3 ? 0 : row >= 3 && row < 6 ? 3 : 6;
  let start_col = col < 3 ? 0 : col >= 3 && col < 6 ? 3 : 6;
  for (let i = start_row; i < start_row + 3; i++) {
    for (let j = start_col; j < start_col + 3; j++) {
      // console.log(i, j);
      if (board[i][j] == value) {
        return false;
      }
    }
  }

  return true;
}

function solve_sudoku(j) {
  if (j == to_check_points.length) {
    return true;
  }

  let [row, col] = to_check_points[j];
  for (let i = 1; i <= 9; i++) {
    let complete_flag;
    let crtness_flag = indi_square_validator(row, col, i);
    if (crtness_flag) {
      board[row][col] = i;
      complete_flag = solve_sudoku(j + 1);
    }
    if (complete_flag) {
      return true;
    }
    board[row][col] = ".";
  }
}

let solved_flag = solve_sudoku(0);
console.log(solved_flag);
console.log(board);
