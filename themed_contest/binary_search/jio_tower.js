// Time Complexity => O()
// Space Complexity => O()
function find_min_range(houses, towers) {
  let low = 1;
  let high = Math.max(...houses);

  let min_range = Infinity;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (if_possible_with_given_range(houses, towers, mid)) {
      high = mid - 1;
      min_range = mid;
    } else {
      low = mid + 1;
    }
  }

  return min_range;
}

function if_possible_with_given_range(houses, towers, given_range) {
  let towers_needed = 0;
  for (let i = 0; i < houses.length; i++) {
    let start_i = i;
    let covered_till = houses[i] + 2 * given_range;
    // console.log(i, covered_till);
    while (houses[i] >= houses[start_i] && houses[i] <= covered_till) {
      i++;
    }
    if (start_i != i) {
      i--;
    }
    towers_needed++;
  }

  return towers_needed <= towers;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  let [_, towers] = input_arr[0].trim().split(" ").map(Number);
  let houses = input_arr[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  console.log(find_min_range(houses, towers));

  // console.log(if_possible_with_given_range(houses, towers, 1));
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

runProgram(`9 7
69 26 88 52 91 73 65 7 45`);
