// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let bill_amount = Number(input);

  bill_amount = bill_amount - 80;
  let power_consumed;
  if (bill_amount > 150 * 5) {
    power_consumed = bill_amount / 10;
  } else if (bill_amount <= 150 * 5 && bill_amount > 50 * 3) {
    power_consumed = bill_amount / 5;
  } else {
    power_consumed = bill_amount / 3;
  }

  console.log(power_consumed);
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

runProgram(`930`);
