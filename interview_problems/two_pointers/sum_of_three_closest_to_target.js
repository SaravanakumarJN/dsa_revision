// Time Complexity => O()
// Space Complexity => O()
function req_ans(array, target) {
  let least_diff = Infinity;
  let ans_sum;
  for (let i = 0; i < array.length; i++) {
    let left_pointer = 0;
    let right_pointer = array.length - 1;

    let fixed = array[i];
    while (left_pointer < right_pointer) {
      if (left_pointer == i) {
        left_pointer++;
        continue;
      }
      if (right_pointer == i) {
        right_pointer--;
        continue;
      }

      let sum = fixed + array[left_pointer] + array[right_pointer];

      if (Math.abs(target - sum) < least_diff) {
        least_diff = Math.abs(target - sum);
        ans_sum = sum;
      } else if (Math.abs(target - sum) == least_diff) {
        if (ans_sum < sum) {
          ans_sum = sum;
        }
      }

      if (sum > target) {
        right_pointer--;
      } else if (sum < target) {
        left_pointer++;
      } else {
        return sum;
      }
    }
  }

  return ans_sum;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i += 2) {
    let [_, t] = input_arr[i].trim().split(" ").map(Number);
    target = t;
    let array = input_arr[i + 1]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);

    if (array.length <= 2) {
      console.log(0);
    } else if (array.length == 3) {
      let sum = array.reduce((acc, ele) => acc + ele, 0);
      console.log(sum);
    } else {
      console.log(req_ans(array, target));
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

runProgram(`10
15 14
3 7 -1 7 0 2 -2 -3 -3 4 0 -1 -3 1 7
18 1
0 -1 0 0 0 -1 0 1 1 0 0 1 1 0 0 0 -1 0
6 20
-1 1 9 9 -8 2
13 3
11 -5 -8 11 6 -8 -11 7 -2 1 5 -11 -8
7 6
1 -1 2 -3 0 4 1
11 22
-14 14 6 12 -1 -14 -3 14 11 14 -13
2 3
-1 -3
11 7
-5 0 -5 4 -1 0 4 -4 1 4 4
20 7
3 7 13 5 -10 -9 -4 -6 7 8 -5 -4 -3 8 -11 3 0 -10 2 1
2 6
-1 0`);

/*
7 6
1 -1 2 -3 0 4 1

6
-3 -2 -1 0 1 2 4

-3  + (2 + 4)  = 3
*/
