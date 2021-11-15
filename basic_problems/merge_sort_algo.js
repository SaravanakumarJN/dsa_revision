function runProgram(input) {
  let array = input.trim().split(" ").map(Number);
  // console.log(array)

  function divide(array, start, end) {
    if (start == end) {
      return array.slice(start, end + 1);
    }

    let mid = Math.floor((start + end) / 2);
    let left_half = divide(array, start, mid);
    let right_half = divide(array, mid + 1, end);
    return merge(left_half, right_half);
  }

  function merge(arr1, arr2) {
    let sorted = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        sorted.push(arr1[i]);
        i++;
      } else {
        sorted.push(arr2[j]);
        j++;
      }
    }

    if (i < arr1.length) {
      for (let x = i; x < arr1.length; x++) {
        sorted.push(arr1[x]);
      }
    }
    if (j < arr2.length) {
      for (let x = j; x < arr2.length; x++) {
        sorted.push(arr2[x]);
      }
    }

    return sorted;
  }

  console.log(divide(array, 0, array.length - 1));
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

runProgram(`3 5 2 1 0 10 -1`);
