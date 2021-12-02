// Time Complexity => O()
// Space Complexity => O()
function get_height(tree_heights, required_wood) {
  let low = 0;
  let high = Number.MAX_VALUE;

  let optimal_saw_height = 0;
  while (low <= high) {
    let mid = Math.floor(high + (low - high) / 2);
    if (if_we_get_with_height_x(tree_heights, required_wood, mid)) {
      optimal_saw_height = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return optimal_saw_height;
}

function if_we_get_with_height_x(tree_heights, required_wood, blade_height) {
  let wood_collected = 0;
  for (let i = 0; i < tree_heights.length; i++) {
    if (tree_heights[i] > blade_height) {
      wood_collected += tree_heights[i] - blade_height;
    }
  }

  return wood_collected >= required_wood;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  let [_, required_wood] = input_arr[0].trim().split(" ").map(Number);
  let tree_heights = input_arr[1].trim().split(" ").map(Number);

  console.log(get_height(tree_heights, required_wood));
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

runProgram(`4 7
20 15 10 17`);
