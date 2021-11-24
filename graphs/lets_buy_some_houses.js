// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    let n = Number(input_arr[i]);

    let houses = {};
    for (let j = i + 1; j <= i + n; j++) {
      let [h1, h2] = input_arr[j].trim().split(" ").map(Number);
      if (!houses[h1]) {
        houses[h1] = [h2];
      } else {
        houses[h1] = [...houses[h1], h2];
      }
    }

    let bought = {};
    let bought_count = 0;
    for (let key in houses) {
      if (!bought[key]) {
        bought[key] = 1;
        bought_count += 1;
      }
      let connections = houses[key];
      for (let j = 0; j < connections.length; j++) {
        if (!bought[connections[j]]) {
          bought[connections[j]] = 1;
          bought_count += 1;
        }
      }
    }
    console.log(bought_count);
    i = i + n;
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

runProgram(`1
3
1 1
1 1
1 1`);
