// Time Complexity => O()
// Space Complexity => O()
function subarray_sum_k(array, k) {
  let start = -1;
  let end = -1;

  let sum = 0;
  let flag = false;
  while (start <= end || end < array.length) {
    if (sum == k) {
      flag = true;
      break;
    } else if (sum < k) {
      end++;
      if (end > array.length - 1) {
        break;
      }
      sum += array[end];
    } else if (sum > k) {
      if (start > -1) {
        sum -= array[start];
      }
      start++;
    }
  }

  return flag ? "Yes" : "No";
}
function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i += 2) {
    let [_, k] = input_arr[i].trim().split(" ").map(Number);
    let array = input_arr[i + 1].trim().split(" ").map(Number);

    let ans = subarray_sum_k(array, k);
    console.log(ans);
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

runProgram(`10
7 14
3 5 4 2 2 1 1
8 14
1 7 4 3 2 1 5 6
2 1
3 1
7 1
1 1 1 1 1 1 1
2 1
1 1
10 2
2 6 3 3 4 1 1 5 2 4
3 6
9 6 4
7 6
3 9 6 1 7 8 10
1 6
3
1 1
3`);

// 1 1 2 2 3 4 5

// 1
// 2
// 4
// 6
// 9
// 13
// 5
