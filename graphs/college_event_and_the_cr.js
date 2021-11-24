// Time Complexity => O()
// Space Complexity => O()
function min_talk(connect, spread_to) {}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    let n = Number(input_arr[i]);
    let connection_length = Number(input_arr[i + 1]);

    let connect = {};
    for (let j = i + 2; j <= i + 1 + connection_length; j++) {
      let [f1, f2] = input_arr[j].trim().split(" ").map(Number);
      if (!connect[f1]) {
        connect[f1] = [f2];
      } else {
        connect[f1] = [...connect[f1], f2];
      }

      if (!connect[f2]) {
        connect[f2] = [f1];
      } else {
        connect[f2] = [...connect[f2], f1];
      }
    }

    console.log(connect);
    i = i + 1 + connection_length;
  }
}
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//   read += input;
// });
// process.stdin.on("end", function () {
//   read = read.replace(/\n$/, "");
//   runProgram(read);
// });
// process.on("SIGINT", function () {
//   read = read.replace(/\n$/, "");
//   runProgram(read);
//   process.exit(0);
// });

runProgram(`2
4
2
0 1
1 2
3
0`);

runProgram(`1
5
3
1 2
3 4
2 4`);

/*
4
1 1
1 1
1 1
1 1
*/
