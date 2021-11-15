/*
https://oj.masaischool.com/contest/2141/problem/07
*/

// /*
// Approach 1 (backtracking)
// */
// // Time Complexity => O()
// // Space Complexity => O()
// let party_flag = false;
// function party_or_not(array, rupees, spent, i) {
//   if (i == array.length) {
//     if (spent == rupees) {
//       party_flag = true;
//     }
//     return;
//   }

//   spent += array[i];
//   party_or_not(array, rupees, spent, i + 1);
//   spent -= array[i];
//   party_or_not(array, rupees, spent, i + 1);
// }

// function runProgram(input) {
//   let input_arr = input.trim().split("\n");
//   let [n, rupees] = input_arr[0].trim().split(" ").map(Number);
//   let array = input_arr[1].trim().split(" ").map(Number);

//   party_or_not(array, rupees, 0, 0);
//   console.log(party_flag ? "Party" : "No Party");
//   party_flag = false;
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

// runProgram(`6 9
// 3 34 4 12 5 2`);

/*
Approach 2 (Tabulation)
*/
// Time Complexity => O()
// Space Complexity => O()
function party_or_not(array, rupees) {
  let tab = new Array(array.length).fill(0);

  for (let i = 0; i < array.length; i++) {
    tab[i] = [];
    for (let j = 0; j <= rupees; j++) {
      if (j == 0) {
        tab[i][j] = 1;
      } else {
        if (i == 0) {
          if (j == array[i]) {
            tab[i][j] = 1;
          } else {
            tab[i][j] = 0;
          }
        } else {
          if (j < array[i]) {
            tab[i][j] = tab[i - 1][j];
          } else if (j > array[i]) {
            let remaining = j - array[i];
            if (tab[i - 1][remaining]) {
              tab[i][j] = 1;
            } else {
              tab[i][j] = tab[i - 1][j];
            }
          } else {
            tab[i][j] = 1;
          }
        }
      }
    }
  }

  return tab[tab.length - 1][tab[0].length - 1] ? "Party" : "No Party";
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");
  let [n, rupees] = input_arr[0].trim().split(" ").map(Number);
  let array = input_arr[1].trim().split(" ").map(Number);

  let ans = party_or_not(array, rupees);
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

runProgram(`6 9
3 34 4 12 5 2`);
