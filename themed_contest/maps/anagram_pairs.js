// Time Complexity => O()
// Space Complexity => O()

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    let n = Number(input_arr[i]);
    let freq_obj = {};
    for (let j = i + 1; j <= i + n; j++) {
      let string = input_arr[j].trim().split("").sort();

      if (freq_obj[JSON.stringify(string)] == undefined) {
        freq_obj[JSON.stringify(string)] = 1;
      } else {
        freq_obj[JSON.stringify(string)] = freq_obj[JSON.stringify(string)] + 1;
      }
    }

    let count = 0;
    for (let key in freq_obj) {
      let n = freq_obj[key] - 1;
      count += (n * (n + 1)) / 2;
    }

    console.log(count);
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

runProgram(`2
5
aaaaabbbbb
baabbbbaaa
aaaabbbbba
xxxxxxxxxy
yxxxxxxxxx
2
abcdefghij
jighdefabc
`);
