let n = 4;
let board = new Array(n).fill(0).map(() => new Array(n).fill("."));

function indi_square_validator(row, col) {
  // row and col check
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] == "Q") {
      return false;
    }

    if (board[i][col] == "Q") {
      return false;
    }
  }

  // diagonal check
  for (let i = 0; i < board.length; i++) {
    let up_row = row - i;
    let down_row = row + i;
    let up_col = col - i;
    let down_col = col + i;
    if (up_row >= 0 && up_col >= 0) {
      if (board[up_row][up_col] == "Q") {
        return false;
      }
    }

    if (down_row < board.length && down_col < board.length) {
      if (board[down_row][down_col] == "Q") {
        return false;
      }
    }

    if (up_row >= 0 && down_col < board.length) {
      if (board[up_row][down_col] == "Q") {
        return false;
      }
    }

    if (down_row < board.length && up_col >= 0) {
      if (board[down_row][up_col] == "Q") {
        return false;
      }
    }
  }
  return true;
}

let all_possible_board = [];
function place_n_queens(board, i) {
  if (i == board.length) {
    if (board[board.length - 1].includes("Q")) {
      all_possible_board.push([...board].map((item) => item.join("")));
    }
    return;
  }

  for (let j = 0; j < board.length; j++) {
    if (indi_square_validator(i, j)) {
      board[i][j] = "Q";
      place_n_queens(board, i + 1);
    }
    board[i][j] = ".";
  }
}

place_n_queens(board, 0);
console.log(all_possible_board);
