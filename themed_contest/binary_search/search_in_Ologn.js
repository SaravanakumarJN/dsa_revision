// Time Complexity => O()
// Space Complexity => O()
function search_x(array, k) {
  let low = 0;
  let high = array.length - 1;
  let index = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] == k) {
      index = mid;
      break;
    } else if (array[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return index;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  let array = input_arr[1].trim().split(" ").map(Number);
  let to_find = Number(input_arr[2]);
  console.log(search_x(array, to_find));
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
1 2 3 5 6
6`);
