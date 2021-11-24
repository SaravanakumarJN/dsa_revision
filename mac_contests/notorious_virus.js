// Time Complexity => O()
// Space Complexity => O()

function runProgram(input) {
  let input_arr = input.trim().split("\n");
  let array = input_arr[1].trim().split(" ").map(Number);

  let max_take = -Infinity;
  for (let i = 0; i < array.length; i++) {
    let subs = 0;
    let max = -Infinity;
    for (let j = i; j < array.length; j++) {
      max = Math.max(max, array[j]);
      subs += array[j];
      max_take = Math.max(max_take, subs - max);
    }
  }

  console.log(max_take);
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

runProgram(`4
1 2 3 4 `);

runProgram(`7
0 -11 5 5 -10 0 50`);
