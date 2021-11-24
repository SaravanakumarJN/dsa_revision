// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let input_arr = input.trim().split("\n");
  let array = input_arr[1].trim().split(" ").map(Number);

  let ans = new Array(array.length).fill(0);
  let prefix_sum = 0;
  let suffix_sum = 0;
  for (let i = 0; i < array.length; i++) {
    ans[i] += prefix_sum;
    prefix_sum += array[i];

    let suffix_index = array.length - 1 - i;
    ans[suffix_index] -= suffix_sum;
    suffix_sum += array[suffix_index];
  }

  let equi_index = -1;
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] == 0) {
      equi_index = i;
      break;
    }
  }

  // console.log(ans);
  console.log(equi_index == -1 ? -1 : equi_index + 1);
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

runProgram(`5
3 3 5 5 1`);
