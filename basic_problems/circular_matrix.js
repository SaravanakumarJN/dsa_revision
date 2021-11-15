function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let j = 1; j < input_arr.length; j++) {
    let [no_row, no_col] = input_arr[j].trim().split(" ").map(Number);
    let matrix = [];
    for (let k = j + 1; k <= j + no_row; k++) {
      matrix.push(input_arr[k].trim().split(" "));
    }

    let row_start = 0;
    let row_end = matrix.length - 1;
    let col_start = 0;
    let col_end = matrix[0].length - 1;

    let answer = [];
    let count = 0;
    while (count < matrix.length * matrix[0].length) {
      for (
        let i = row_end;
        i >= row_start && count < matrix.length * matrix[0].length;
        i--
      ) {
        answer.push(matrix[i][col_start]);
        count++;
      }
      col_start++;

      for (
        let i = col_start;
        i <= col_end && count < matrix.length * matrix[0].length;
        i++
      ) {
        answer.push(matrix[row_start][i]);
        count++;
      }
      row_start++;

      if (col_start <= col_end) {
        for (
          let i = row_start;
          i <= row_end && count < matrix.length * matrix[0].length;
          i++
        ) {
          answer.push(matrix[i][col_end]);
          count++;
        }
        col_end--;
      }

      if (row_start <= row_end) {
        for (
          let i = col_end;
          i >= col_start && count < matrix.length * matrix[0].length;
          i--
        ) {
          answer.push(matrix[row_end][i]);
          count++;
        }
        row_end--;
      }
    }

    console.log(answer.join(" "));

    j = j + no_row;
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

runProgram(`2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);
