// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let input_arr = input.trim().split("\n");
  let array = input_arr[1].trim().split(" ").map(Number);

  let sum_upto_i = [];
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    sum_upto_i[i] = total;
    total += array[i];
  }
  sum_upto_i.push(total);

  for (let i = 3; i < input_arr.length; i++) {
    let [l, r] = input_arr[i].trim().split(" ").map(Number);

    console.log(sum_upto_i[r + 1 - 1] - sum_upto_i[l - 1]);
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

runProgram(`4
3 2 1 5
4
1 3
2 4
1 4
3 3`);
