// Time Complexity => O()
// Space Complexity => O()
let obj;
let target;
let memo = {};
function shortest_distance(array, visited, current) {
  if (memo[current]) {
    return memo[current];
  }
  if (current == target) {
    return 0;
  }
  if (array[array.length - 1] == current) {
    return Infinity;
  }

  // go to all the parks that can be reached from current part
  let min = Infinity;
  for (let j = 0; j < array.length; j++) {
    let park = array[j];

    // park is not visited
    if (!visited[park]) {
      // mark visited
      visited[park] = 1;

      // if visited has connections, visit the connections
      if (obj[park]) {
        min = Math.min(
          min,
          1 + shortest_distance(obj[park], { ...visited }, park)
        );
      }
    }
  }

  memo[current] = min;
  return min;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    let [to_reach, m] = input_arr[i].trim().split(" ").map(Number);
    target = to_reach;

    obj = {};
    for (let j = i + 1; j <= i + m; j++) {
      let [p1, p2] = input_arr[j].trim().split(" ");
      if (!obj[p1]) {
        obj[p1] = [p2];
      } else {
        obj[p1] = [...obj[p1], p2];
      }

      if (!obj[p2]) {
        obj[p2] = [p1];
      } else {
        obj[p2] = [...obj[p2], p1];
      }
    }

    console.log(shortest_distance(obj[1], { 1: 1 }, 1, 0));
    memo = {};
    i = i + m;
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
3 2
1 2
2 3
4 4
1 2
2 3
3 4
4 2`);

runProgram(`1
5 10
1 2
1 0
0 3
3 7
3 4
7 4
7 6
4 5
4 6
6 5`);
