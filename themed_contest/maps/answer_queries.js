// Time Complexity => O()
// Space Complexity => O()
let array;
function find_x(x) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] == x) {
      return true;
    } else if (array[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");
  array = input_arr[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let queries = input_arr[3].trim().split(" ");

  for (let i = 0; i < queries.length; i++) {
    console.log(find_x(Number(queries[i])) ? "YES" : "NO");
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

runProgram(`5
1 2 3 4 5
3
3 5 7`);
