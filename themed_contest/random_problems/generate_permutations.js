// Time Complexity => O()
// Space Complexity => O()
function getPerms(array) {
  if (array.length == 1) {
    return [array];
  }

  let ele = array[0];
  let without_ele = array.slice(1);

  let all_prems = [];
  let perms_without_ele = getPerms(without_ele);

  for (let i = 0; i < perms_without_ele.length; i++) {
    let curr_ele = perms_without_ele[i];
    for (let j = 0; j <= curr_ele.length; j++) {
      let perm = [...curr_ele.slice(0, j), ele, ...curr_ele.slice(j)];
      all_prems.push(perm);
    }
  }

  return all_prems;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  let array = input_arr[1].trim().split(" ");

  let all_perms = getPerms(array).map((ele) => ele.join(" "));
  console.log(all_perms.sort().join("\n"));
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

runProgram(`3
1 2 3`);
