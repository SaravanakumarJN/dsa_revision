// Time Complexity => O()
// Space Complexity => O()
function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i += 2) {
    let sum = 0;
    let obj = {};
    let max_occ = 0;

    let array = input_arr[i + 1]
      .trim()
      .split(" ")
      .map((ele) => {
        if (!obj[ele]) {
          obj[ele] = 1;
          max_occ = Math.max(max_occ, 1);
        } else {
          obj[ele] = obj[ele] + 1;
          max_occ = Math.max(max_occ, obj[ele]);
        }

        let num = Number(ele);
        sum += num;
        return num;
      })
      .sort((a, b) => b - a);

    let mean = Math.floor(sum / array.length);
    let mid;
    if ((array.length - 1) % 2 != 0) {
      let left = Math.floor((array.length - 1) / 2);
      let right = Math.ceil((array.length - 1) / 2);
      // console.log(left, array[left]);
      // console.log(right, array[right]);

      mid = Math.floor((array[left] + array[right]) / 2);
    } else {
      mid = array[(array.length - 1) / 2];
    }

    let mode = Infinity;
    for (let keys in obj) {
      if (obj[keys] == max_occ) {
        mode = Math.min(mode, keys);
      }
    }

    console.log(mean, mid, mode);
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

runProgram(`2
10
4 8 7 6 4 2 4 4 1 2
6
4 4 4 2 2 2`);
