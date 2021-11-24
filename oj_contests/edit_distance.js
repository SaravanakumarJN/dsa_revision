// Time Complexity => O()
// Space Complexity => O()
let memo = {};
let s1;
let s2;
function minimum_edits(i, j) {
  if (memo[`${i}_${j}`]) {
    return memo[`${i}_${j}`];
  }

  if (j == s2.length) {
    return s1.length - i;
  }

  if (i == s1.length) {
    return s2.length - j;
  }

  if (s1[i] == s2[j]) {
    memo[`${i}_${j}`] = minimum_edits(i + 1, j + 1);
  } else {
    let insert_char = 1 + minimum_edits(i, j + 1);
    let delete_char = 1 + minimum_edits(i + 1, j);
    let replace_char = 1 + minimum_edits(i + 1, j + 1);

    memo[`${i}_${j}`] = Math.min(insert_char, delete_char, replace_char);
  }
  return memo[`${i}_${j}`];
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i += 2) {
    s1 = input_arr[i].trim();
    s2 = input_arr[i + 1].trim();

    if (s1 == s2) {
      console.log(0);
    } else {
      let ans = minimum_edits(0, 0);
      console.log(ans);
    }

    memo = {};
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

runProgram(`3
abcde
abde
abde
abcde
abcde
abxde`);
