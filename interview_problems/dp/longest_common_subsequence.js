// Time Complexity => O()
// Space Complexity => O()
function LCS(s1, s2, i, j) {
  if (i < 0 || j < 0) {
    return "";
  }

  if (s1[i] == s2[j]) {
    return s1[i] + LCS(s1, s2, i - 1, j - 1);
  }

  let opt1 = LCS(s1, s2, i - 1, j);
  let opt2 = LCS(s1, s2, i, j - 1);

  let max = opt1.length > opt2.length ? opt1 : opt2;

  return max;
}

function runProgram(input) {
  let [s1, s2] = input.trim().split("\n");

  console.log(
    LCS(s1, s2, s1.length - 1, s2.length - 1)
      .split("")
      .reverse()
      .join("")
  );
}
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/,"")
//    runProgram(read);
// });
// process.on("SIGINT", function () {
//     read = read.replace(/\n$/,"")
//     runProgram(read);
//     process.exit(0);
// });

runProgram(`aaahgi
hgaahi`);
