// Time Complexity => O()
// Space Complexity => O()

function binary_search_low(array, ele) {
  let low = 0;
  let high = array.length - 1;
  let low_index = -1;
  let near_index = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] < ele) {
      low = mid + 1;
    } else if (array[mid] > ele) {
      near_index = mid;
      high = mid - 1;
    } else {
      low_index = mid;
      high = mid - 1;
    }
  }

  return low_index == -1 ? near_index : low_index;
}

function binary_search_high(array, ele) {
  let low = 0;
  let high = array.length - 1;
  let high_index = -1;
  let near_index = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] < ele) {
      low = mid + 1;
      near_index = mid;
    } else if (array[mid] > ele) {
      high = mid - 1;
    } else {
      high_index = mid;
      low = mid + 1;
    }
  }

  return high_index == -1 ? near_index : high_index;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");
  let array = input_arr[1].trim().split(" ").map(Number);
  array.sort((a, b) => a - b);
  // console.log(array);

  let ans = [];
  for (let i = 3; i < input_arr.length; i++) {
    let [l, r] = input_arr[i].trim().split(" ").map(Number);

    let low = binary_search_low(array, l);
    let high = binary_search_high(array, r);

    if (low == -1 || high == -1) {
      ans.push(0);
    } else {
      ans.push(high - low + 1);
    }
  }
  console.log(ans.join(" "));
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

runProgram(`3
13 12 -19
2
18 18`);
