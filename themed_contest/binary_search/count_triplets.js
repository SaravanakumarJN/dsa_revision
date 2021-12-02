// Time Complexity => O()
// Space Complexity => O()

function count_triplet(array, K) {
  let count = 0;

  for (let i = 0; i < array.length - 2; i++) {
    let min = array[i];
    let j = i + 1;
    let k = array.length - 1;
    while (j < k) {
      let diff = Math.abs(min - array[k]);
      if (diff <= K) {
        let n = k - j;
        count += n * ((n + 1) / 2);
        break;
      }
      k--;
    }
  }

  return count;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  let [_, K] = input_arr[0].trim().split(" ").map(Number);
  array = input_arr[1].trim().split(" ").map(Number);

  console.log(count_triplet(array, K));
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

// runProgram(`4 2
// -3 -2 -1 0`);
runProgram(`4 3
1 2 3 4`);
