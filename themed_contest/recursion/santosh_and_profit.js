// Time Complexity => O()
// Space Complexity => O()
let memo = {};
function no_of_ways(x, y) {
  if (memo[y]) {
    return memo[y];
  }
  if (y == x) {
    return 1;
  } else if (y > x) {
    return 0;
  }

  memo[y] = no_of_ways(x, y + 8) + no_of_ways(x, y + 4);
  return memo[y];
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    let num = Number(input_arr[i]);
    if (num % 4 == 0 || num % 8 == 0) {
      memo = {};
      console.log(no_of_ways(num, 0));
    } else {
      console.log(0);
    }
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

runProgram(`7
28
9
40
56
5
48
150`);
