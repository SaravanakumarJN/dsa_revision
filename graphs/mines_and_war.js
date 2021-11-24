// Time Complexity => O()
// Space Complexity => O()
let obj;
function max_impact(bomb, connections, visited) {
  if (visited[bomb]) {
    return 0;
  }

  let max = 1;
  visited[bomb] = 1;

  for (let i = 0; i < connections.length; i++) {
    if (!visited[connections[i]]) {
      let next = max_impact(connections[i], obj[connections[i]], visited);
      max += next;
    }
  }

  return max;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  obj = {};
  for (let i = 1; i < input_arr.length; i++) {
    let [p1, p2] = input_arr[i].trim().split(" ");

    if (!obj[p1]) {
      obj[p1] = [p2];
    } else {
      obj[p1] = [...obj[p1], p2];
    }

    if (!obj[p2]) {
      obj[p2] = [];
    }
    // } else {
    //   obj[p2] = [...obj[p2], p1];
    // }
  }

  let max = -Infinity;
  for (let key in obj) {
    max = Math.max(max, max_impact(key, obj[key], {}));
  }

  console.log(max);
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

runProgram(`4 2
1 2
3 2`);

runProgram(`4 3
1 2
2 1
2 3`);
