// Time Complexity => O()
// Space Complexity => O()
// function check_palindrome(string) {
//   for (let i = 0, j = string.length - 1; i < j; i++, j--) {
//     if (string[i] != string[j]) {
//       return false;
//     }
//   }

//   return true;
// }

// let max_length = -Infinity;
// function longest_palindromic_subsequence(string, i, subs) {
//   if (i == string.length) {
//     if (check_palindrome(subs)) {
//       max_length = Math.max(max_length, subs.length);
//     }
//     return;
//   }
//   subs.push(string[i]);
//   longest_palindromic_subsequence(string, i + 1, subs);
//   subs.pop();
//   longest_palindromic_subsequence(string, i + 1, subs);
// }

// function runProgram(input) {
//   let string = input.trim();

//   longest_palindromic_subsequence(string, 0, []);
//   console.log(max_length);
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

let memo = {};
function long_pali_subs(string, i, j) {
  if (memo[`${i}_${j}`]) {
    return memo[`${i}_${j}`];
  }
  if (i == j) {
    return 1;
  }
  if (i > j) {
    return 0;
  }
  // if same move both
  let ans;
  if (string[i] == string[j]) {
    ans = 2 + long_pali_subs(string, i + 1, j - 1);
  } else {
    // if not same either move start or end
    let opt1 = long_pali_subs(string, i + 1, j);
    let opt2 = long_pali_subs(string, i, j - 1);

    ans = Math.max(opt1, opt2);
  }
  memo[`${i}_${j}`] = ans;
  return ans;
}

function runProgram(input) {
  let string = input.trim();

  let ans = long_pali_subs(string, 0, string.length - 1);
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

runProgram(`AABCDEBAZ`);
