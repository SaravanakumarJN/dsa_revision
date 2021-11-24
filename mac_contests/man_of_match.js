// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i += 2) {
    let n = Number(input_arr[i]);
    let runs = input_arr[i + 1].trim().split(" ").map(Number);

    let ab = 0;
    let virat = 0;
    let ab_cur_play = true;
    for (let j = 0; j < runs.length; j++) {
      if (j > 0 && j % 6 == 0) {
        ab_cur_play = !ab_cur_play;
      }

      if (ab_cur_play) {
        ab += runs[j];
      } else {
        virat += runs[j];
      }
      if (runs[j] == 2 || runs[j] == 4 || runs[j] == 6 || runs[j] == 0) {
        continue;
      } else {
        ab_cur_play = !ab_cur_play;
      }
    }

    if (ab > virat) {
      console.log("AB de Villiers");
    } else if (virat > ab) {
      console.log("Virat Kohli");
    } else {
      console.log("Tie");
    }
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
1
0 1 0 1 0 0`);

/*
2
1 2 0 0 1 1 6 6 4 1 6 1
3
0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
*/
