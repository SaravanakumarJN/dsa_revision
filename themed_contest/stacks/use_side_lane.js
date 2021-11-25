// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let j = 0; j < input_arr.length - 1; j += 2) {
    let curr_order = input_arr[j + 1].trim().split(" ").map(Number).reverse();

    let inorder = [];
    let stack = [];
    let i = 1;
    let flag = true;
    while (curr_order.length || stack.length) {
      let curr_ele = curr_order[curr_order.length - 1];
      if (curr_ele == i) {
        curr_order.pop();
        inorder.push(curr_ele);
        i++;
      } else if (i == stack[stack.length - 1]) {
        let ele = stack.pop();
        inorder.push(ele);
        i++;
      } else if (curr_ele) {
        if (!stack.length) {
          curr_order.pop();
          stack.push(curr_ele);
        } else if (stack.length && stack[stack.length - 1] > curr_ele) {
          curr_order.pop();
          stack.push(curr_ele);
        } else {
          flag = false;
          break;
        }
      }
    }
    // console.log(inorder);
    if (flag) {
      console.log("yes");
    } else {
      console.log("no");
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

runProgram(`5
5 1 2 4 3 
0 `);
