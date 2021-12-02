// Time Complexity => O()
// Space Complexity => O()
function number_of_occcurences(array, x) {
  let lower_limit;
  let upper_limit;

  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (array[mid] >= x) {
      if (array[mid] == x) {
        lower_limit = mid;
      }
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  let low2 = 0;
  let high2 = array.length - 1;
  while (low2 <= high2) {
    let mid2 = Math.floor(low2 + (high2 - low2) / 2);

    if (array[mid2] <= x) {
      if (array[mid2] == x) {
        upper_limit = mid2;
      }
      low2 = mid2 + 1;
    } else {
      high2 = mid2 - 1;
    }
  }

  return upper_limit !== undefined && lower_limit !== undefined
    ? upper_limit - lower_limit + 1
    : upper_limit !== undefined && lower_limit !== undefined
    ? 1
    : 0;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  let [_, x] = input_arr[0].trim().split(" ").map(Number);
  let array = input_arr[1].trim().split(" ").map(Number);
  console.log(number_of_occcurences(array, x));
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

runProgram(`10 2
2 2 2 2 2 11 15 18 20 22`);
