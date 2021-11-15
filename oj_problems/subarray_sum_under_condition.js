// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let input_arr = input.trim().split(" ").map(Number);

  let obj = {};
  let total = 0;
  let answer = [];
  input_arr.forEach((item, i) => {
    total += item;
    if (total == 0) {
      answer.push(`0 ${i}`);
    }
    if (!obj[total]) {
      obj[total] = [i];
    } else {
      for (let j = 0; j < obj[total].length; j++) {
        answer.push(`${obj[total][j] + 1} ${i}`);
      }
      obj[total] = [...obj[total], i];
    }
  });

  console.log(answer.join("\n"));

  // for (let i = 0; i < sum_upto_e.length; i++) {
  //   if (!obj[sum_upto_e[i]]) {
  //     obj[sum_upto_e[i]] = [i];
  //   } else {
  //     obj[sum_upto_e[i]] = [...obj[sum_upto_e[i]], i];
  //   }
  // }

  // let ans = []
  // for(let )
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

runProgram(`-4 2 -8 3 -3 -7 1 4 -5 7`);
