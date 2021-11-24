// Time Complexity => O()
// Space Complexity => O()
let req_height = -Infinity;
function max_height(array, i, height_stack) {
  if (i == array.length) {
    let current_max_height = 0;
    height_stack.forEach((ele, i) => {
      if (i == 0) {
        current_max_height += ele[1];
      } else if (
        ele[1] < height_stack[i - 1][1] &&
        ele[0] < height_stack[i - 1][0]
      ) {
        current_max_height += ele[1];
      }
    });
    req_height = Math.max(req_height, current_max_height);
    return;
  }

  height_stack.push(array[i]);
  max_height(array, i + 1, height_stack);
  height_stack.pop();
  max_height(array, i + 1, height_stack);
}

// function max_heights(array) {
//   let max_stack = [array[0]];
//   for (let i = 1; i < array.length; i++) {
//     if (
//       array[i][1] < max_stack[max_stack.length - 1][1] &&
//       array[i][0] < max_stack[max_stack.length - 1][0]
//     ) {
//       max_stack.push(array[i]);
//     } else if (
//       array[i][1] == array[i - 1][1] ||
//       array[i][0] == array[i - 1][0]
//     ) {
//       continue;
//     }
//   }
//   console.log(max_stack);
// }

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    let n = Number(input_arr[i]);
    let all_discs = [];
    for (let j = i + 1; j <= i + n; j++) {
      all_discs.push(input_arr[j].split(" ").map(Number));
    }
    all_discs.sort((a, b) => {
      b[1] - a[1] && b[0] - a[0];
    });
    max_height(all_discs, 0, []);
    console.log(req_height);

    i = i + n;
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

runProgram(`2
3
4 3
1 4
3 2
5
5 6
4 3
1 2
7 5
3 4`);
