// Time Complexity => O()
// Space Complexity => O()
function sort(array) {
  for (let i = 0; i < array.length; i++) {
    let low_index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[low_index]) {
        low_index = j;
      }
    }
    [array[i], array[low_index]] = [array[low_index], array[i]];
  }
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  let array = input_arr[1].trim().split(" ").map(Number);
  sort(array);
  console.log(array.join(" "));
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
3 5 0 9 8`);
