// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let input_arr = input.trim().split("\n");

  let [target, n] = input_arr[0].trim().split(" ").map(Number);
  let array = input_arr[1].trim().split(" ").map(Number);

  let tab = [];

  for (let i = 0; i < array.length; i++) {
    tab.push([]);
    for (let j = 0; j <= target; j++) {
      if (j == 0) {
        tab[i][j] = 1;
      } else {
        if (i == 0) {
          if (j % array[i] == 0) {
            tab[i][j] = 1;
          } else {
            tab[i][j] = 0;
          }
        } else {
          if (j < array[i]) {
            tab[i][j] = tab[i - 1][j];
          } else {
            tab[i][j] = tab[i - 1][j] + tab[i][j - array[i]];
          }
        }
      }
    }
  }

  console.log(tab[tab.length - 1][tab[0].length - 1]);
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

runProgram(`4 3
1 2 3`);
