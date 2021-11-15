// Time Complexity => O()
// Space Complexity => O()
function product_except_i(array) {
  let ans = new Array(array.length).fill(1);
  let prefix_total = 1;
  let suffix_total = 1;
  for (let i = 0; i < array.length; i++) {
    ans[i] *= prefix_total;
    prefix_total *= array[i];

    let suffix_index = array.length - 1 - i;
    ans[suffix_index] = ans[suffix_index] * suffix_total;
    suffix_total *= array[suffix_index];
  }

  // console.log(ans);
  for (let i = array.length - 1; i >= 0; i--) {}

  return ans.join(" ");
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i += 2) {
    let array = input_arr[i + 1].trim().split(" ").map(Number);

    let ans = product_except_i(array);
    console.log(ans);
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
6
10 3 7 3 10 6`);
