// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let input_arr = input.trim().split("\n");
  let team1 = input_arr[1].trim().split(" ");
  let team1_avg =
    team1.reduce((acc, ele) => acc + Number(ele), 0) / team1.length;
  let team2 = input_arr[2].trim().split(" ");
  let team2_avg =
    team2.reduce((acc, ele) => acc + Number(ele), 0) / team2.length;

  if (team1_avg % 2 == 0 || team2_avg % 2 == 0) {
    let ans = Math.ceil(Math.max(team1_avg, team2_avg));
    if (ans % 2 == 0) {
      console.log(ans);
    } else {
      console.log("-1");
    }
  } else {
    console.log("-1");
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

runProgram(`3
10 20 30
40 80 60`);
