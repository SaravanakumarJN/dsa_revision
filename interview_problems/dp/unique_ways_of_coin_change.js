// Time Complexity => O()
// Space Complexity => O()
function unique_change(deno, rupees) {
  if (rupees < 0) {
    return 0;
  }
  if (rupees == 0) {
    return 1;
  }

  return deno.reduce((acc, item) => {
    return acc + unique_change(deno, rupees - item);
  }, 0);

  // let tab = [];

  // for (let i = 0; i < deno.length; i++) {
  //   tab[i] = [];
  //   for (let j = 0; j <= rupees; j++) {
  //     if (j == 0) {
  //       tab[i][j] = 1;
  //     } else {
  //       if (i == 0) {
  //         tab[i][j] = j < deno[i] ? 0 : !(j % deno[i]) ? 1 : 0;
  //       } else {
  //         tab[i][j] =
  //           j < deno[i]
  //             ? tab[i - 1][j]
  //             : !(j % deno[i])
  //             ? tab[i - 1][j] + tab[i][j - deno[i]]
  //             : tab[i][j - deno[i]] + tab[i - 1][j];
  //       }
  //     }
  //   }
  // }

  // return tab[tab.length - 1][tab[0].length - 1];
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");
  let [rupees, _] = input_arr[0].trim().split(" ").map(Number);
  let deno = input_arr[1].trim().split(" ").map(Number);

  let ans = unique_change(deno, rupees);
  console.log(ans);
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

runProgram(`15 3
2 3 5 10`);
