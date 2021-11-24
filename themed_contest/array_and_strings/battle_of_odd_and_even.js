// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let input_arr = input.trim().split("\n");
  let arr = input_arr[1].trim().split(" ").map(Number);

  let odd_sum = 0;
  let even_sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even_sum += arr[i];
    } else {
      odd_sum += arr[i];
    }
  }

  if (odd_sum > even_sum) {
    console.log("Odd");
  } else {
    console.log("Even");
  }
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
1 2 3 4`);
