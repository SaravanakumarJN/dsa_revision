/*
https://oj.masaischool.com/contest/2141/problem/04

Longest increasing subset
*/

// /*
// Approach 1 (Generate all the increasing subsets and find the maximum among it)
// Time Complexity => O()
// Space Complexity => O()
// */
// let max = 1;
// // let all_increasing_subs = [];
// function increasing_trees(trees, i, subset) {
//   if (i == trees.length) {
//     if (subset.length > max) {
//       max = subset.length;
//     }
//     // all_increasing_subs.push([...subset]);
//     return;
//   }

//   let flag = false;
//   if (subset.length) {
//     if (subset[subset.length - 1] < trees[i]) {
//       subset.push(trees[i]);
//       flag = true;
//     }
//   } else {
//     subset.push(trees[i]);
//     flag = true;
//   }
//   increasing_trees(trees, i + 1, subset);
//   if (flag == true) {
//     subset.pop();
//   }
//   increasing_trees(trees, i + 1, subset);
// }

// function runProgram(input) {
//   let input_arr = input.trim().split("\n");
//   let array = input_arr[1].trim().split(" ").map(Number);

//   increasing_trees(array, 0, []);
//   console.log(max);
// }
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//   read += input;
// });
// process.stdin.on("end", function () {
//   read = read.replace(/\n$/, "");
//   runProgram(read);
// });
// process.on("SIGINT", function () {
//   read = read.replace(/\n$/, "");
//   runProgram(read);
//   process.exit(0);
// });

// runProgram(`9
// 10 22 9 33 21 50 41 60 80`);

/* 
Approach 2
Time Complexity => O()
Space Complexity => O()
*/
function increasing_trees(trees) {
  let largest_end_with_i = {};

  for (let i = 0; i < trees.length; i++) {
    let max = 1;
    for (let j = 0; j < i; j++) {
      if (trees[j] < trees[i]) {
        max = Math.max(max, 1 + largest_end_with_i[j]);
      }
    }

    largest_end_with_i[i] = max;
  }

  console.log(largest_end_with_i);
  return Math.max(...Object.values(largest_end_with_i));
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");
  let array = input_arr[1].trim().split(" ").map(Number);

  let ans = increasing_trees(array);
  console.log(ans);
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
15 15 3 10 12 12 13 5 5 7`);
