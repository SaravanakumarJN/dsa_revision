// Time Complexity => O()
// Space Complexity => O()
let matrix = [];
let n;
let m;
let changes = 0;
function min_changes() {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      is_possible_or_not(i, j);
    }
  }
}

function move_validator(i, j) {
  if (i < matrix.length && j < matrix[0].length) {
    return true;
  }
  return false;
}

function is_possible_or_not(i, j) {
  if (matrix[i][j] == "C") {
    return;
  }

  if (matrix[i][j] == "R") {
    if (move_validator(i, j + 1)) {
      is_possible_or_not(i, j + 1);
    } else {
      changes++;
      matrix[i][j] = "D";
      is_possible_or_not(i, j);
    }
  }

  if (matrix[i][j] == "D") {
    if (move_validator(i + 1, j)) {
      is_possible_or_not(i + 1, j);
    } else {
      changes++;
      matrix[i][j] = "R";
      is_possible_or_not(i, j);
    }
  }
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    let [ni, mi] = input_arr[i].trim().split(" ").map(Number);

    matrix = [];
    n = ni;
    m = mi;
    changes = 0;
    for (let j = i + 1; j <= i + n; j++) {
      matrix.push(input_arr[j].trim().split(""));
    }
    min_changes();
    console.log(changes);
    i = i + n;
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

runProgram(`4
3 3
RRD
DDR
RRC
1 4
DDDC
6 9
RDDDDDRRR
RRDDRRDDD
RRDRDRRDR
DDDDRDDRR
DRRDRDDDR
DDRDRRDDC
1 1
C`);
