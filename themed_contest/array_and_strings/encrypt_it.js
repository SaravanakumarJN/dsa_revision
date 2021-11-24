// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let input_arr = input.trim().split("\n");
  let string = input_arr[0].trim();
  let k = Number(input_arr[1]);

  let result = "";
  let low = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let up = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let low_lookup = {};
  let up_lookup = {};
  let num_lookup = {};

  low.forEach((ele, i) => (low_lookup[ele] = i));
  up.forEach((ele, i) => (up_lookup[ele] = i));
  num.forEach((ele, i) => (num_lookup[ele] = i));

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (low_lookup[char] !== undefined) {
      let after_k = (low_lookup[char] + k) % 26;
      result += low[after_k];
    } else if (up_lookup[char] !== undefined) {
      let after_k = (up_lookup[char] + k) % 26;
      result += up[after_k];
    } else if (num_lookup[char] !== undefined) {
      let after_k = (num_lookup[char] + k) % 10;
      result += num[after_k];
    } else {
      result += char;
    }
  }

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

runProgram(`All-convoYs-9-be:Alert1.
4`);
