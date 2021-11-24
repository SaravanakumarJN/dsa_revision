// Time Complexity => O()
// Space Complexity => O()
// function bipart_or_not(rel_obj, col_obj) {
//   for (let key in rel_obj) {
//     let connection = rel_obj[key];

//     let c1_count = 0;
//     let c2_count = 0;
//     for (let i = 0; i < connection.length; i++) {
//       if (col_obj[connection[i]] == "c1") {
//         c1_count++;
//       } else if (col_obj[connection[i]] == "c2") {
//         c2_count++;
//       }
//     }

//     if (c1_count == 0) {
//       col_obj[key] = "c1";
//     } else if (c2_count == 0) {
//       col_obj[key] = "c2";
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

let memo = {};
function bipart_or_not(obj, color_obj, keys, i) {
  if (memo[`${keys[i]}`]) {
    return memo[`${keys[i]}`];
  }
  if (i == keys.length) {
    return true;
  }

  let key = keys[i];
  let c1 = 0;
  let c2 = 0;
  let connections = obj[key];
  for (let j = 0; j < connections.length; j++) {
    if (c1 > 0 && c2 > 0) {
      break;
    }

    if (color_obj[connections[j]] == "c1") {
      c1++;
    } else if (color_obj[connections[j]] == "c2") {
      c2++;
    }
  }

  if (c1 == 0 && c2 == 0) {
    color_obj[key] = "c1";
    let op1 = bipart_or_not(obj, { ...color_obj }, keys, i + 1);
    let op2 = false;
    if (!op1) {
      color_obj[key] = "c2";
      op2 = bipart_or_not(obj, { ...color_obj }, keys, i + 1);
    }
    memo[`${keys[i]}`] = op1 || op2;
    return op1 || op2;
  } else if (c1 == 0) {
    color_obj[key] = "c1";
    memo[`${keys[i]}`] = bipart_or_not(obj, { ...color_obj }, keys, i + 1);
    return memo[`${keys[i]}`];
  } else if (c2 == 0) {
    color_obj[key] = "c2";
    memo[`${keys[i]}`] = bipart_or_not(obj, { ...color_obj }, keys, i + 1);
    return memo[`${keys[i]}`];
  } else {
    memo[`${keys[i]}`] = false;
    return memo[`${keys[i]}`];
  }
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    let [n, rel] = input_arr[i].trim().split(" ").map(Number);

    let obj = {};
    let color_obj = {};
    for (let j = i + 1; j <= i + rel; j++) {
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

      if (!color_obj[p1]) {
        color_obj[p1] = ".";
      }
      if (!color_obj[p2]) {
        color_obj[p2] = ".";
      }
    }

    let keys = Object.keys(obj);
    let flag = bipart_or_not(obj, color_obj, keys, 0);
    let ans = flag ? "Bipartite graph" : "Non-Bipartite graph";
    console.log(ans);
    memo = {};
    i = i + rel;
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

runProgram(`1
3 3
1 2
2 3
3 1`);
