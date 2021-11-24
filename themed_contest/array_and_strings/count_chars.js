// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let str = input.trim();

  let obj = {};
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let key = str[i];
    if (obj[key] == undefined) {
      if (i > 0) {
        result += obj[str[i - 1]];
        delete obj[str[i - 1]];
      }
      obj[key] = 1;
      result += key;
    } else {
      obj[key] = obj[key] + 1;
    }
  }
  result += obj[str[str.length - 1]];

  console.log(result);
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

runProgram(`aaabbbbcca`);
