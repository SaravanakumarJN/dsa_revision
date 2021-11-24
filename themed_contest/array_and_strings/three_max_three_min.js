// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let input_arr = input.trim().split("\n");

  let array = input_arr[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let set_sort = new Set(array);

  let min = "";
  let max = "";
  if (set_sort.size < 3) {
    console.log("Not Possible" + "\n" + "Not Possible");
  } else {
    let i = 0;
    set_sort.forEach((ele) => {
      if (i < 3) {
        min += ele + " ";
      }
      if (i >= set_sort.size - 3) {
        max += ele + " ";
      }
      i++;
    });

    console.log(min.trim() + "\n" + max.trim());
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

runProgram(`8
10 1 `);
