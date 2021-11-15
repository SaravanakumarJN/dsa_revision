// /*
// https://oj.masaischool.com/contest/2141/problem/06
// */

// /*
// Approach 1
// */
// // Time Complexity => O()
// // Space Complexity => O()
// let max = 0;
// function max_take(array, i, cap, taken_value, taken_weight) {
//   if (i == array.length) {
//     max = Math.max(max, taken_value);
//     return;
//   }

//   let flag = false;
//   if (taken_weight + array[i][0] < cap) {
//     taken_value += array[i][1];
//     taken_weight += array[i][0];
//     flag = true;
//   }
//   max_take(array, i + 1, cap, taken_value, taken_weight);
//   if (flag) {
//     taken_value -= array[i][1];
//     taken_weight -= array[i][0];
//   }
//   max_take(array, i + 1, cap, taken_value, taken_weight);
// }

// function runProgram(input) {
//   let input_arr = input.trim().split("\n");

//   for (let i = 1; i < input_arr.length; i++) {
//     let [capacity, n] = input_arr[i].trim().split(" ").map(Number);

//     let value_board = [];
//     for (let j = i + 1; j <= i + n; j++) {
//       value_board.push(input_arr[j].trim().split(" ").map(Number));
//     }
//     max_take(value_board, 0, capacity, 0, 0);
//     console.log(max);
//     i = i + n;
//   }
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

// runProgram(`1
// 4 6
// 4 32
// 1 8
// 2 4
// 3 0
// 2 5
// 2 3`);

/*
Approach 2
*/
// Time Complexity => O()
// Space Complexity => O()

function max_take(array, cap) {
  let tab = [];

  for (let i = 0; i < array.length; i++) {
    tab[i] = [];
    for (let j = 0; j <= cap; j++) {
      // no bag capacity
      if (j == 0) {
        tab[i][j] = 0;
      } else {
        // if first find
        if (i == 0) {
          tab[i][j] =
            j < array[i][0]
              ? tab[i][j - 1]
              : j == array[i][0]
              ? array[i][1]
              : tab[i][j - 1];
        }
        // rest find
        else {
          tab[i][j] =
            j < array[i][0]
              ? Math.max(tab[i - 1][j], tab[i][j - 1])
              : j == array[i][0]
              ? Math.max(tab[i - 1][j], array[i][1])
              : Math.max(
                  tab[i - 1][j],
                  array[i][1] + tab[i - 1][j - array[i][0]]
                );
        }
      }
    }
  }

  return tab[tab.length - 1][tab[0].length - 1];
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    let [capacity, n] = input_arr[i].trim().split(" ").map(Number);

    let value_board = [];
    for (let j = i + 1; j <= i + n; j++) {
      value_board.push(input_arr[j].trim().split(" ").map(Number));
    }
    let ans = max_take(value_board, capacity);
    console.log(ans);

    i = i + n;
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

runProgram(`1
4 5
1 8
2 4
3 0
2 5
2 3`);
