// Time Complexity => O()
// Space Complexity => O()

/*
abc

for abc
a
bc

for bc
b
c

bc
cb

abc
bac
bca
acb
cab
cba






*/

function getPermutations(array) {
  if (array.length == 1) {
    return [array];
  }
  let curr_ele = array[0];
  let remaining_ele = array.slice(1);

  let perm_of_remaining = getPermutations(remaining_ele);
  let all_perms = [];

  for (let i = 0; i < perm_of_remaining.length; i++) {
    let current = perm_of_remaining[i];
    for (let j = 0; j < array.length; j++) {
      let ans = [...current.slice(0, j), curr_ele, ...current.slice(j)];
      all_perms.push(ans);
    }
  }

  return all_perms;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");
  let array = input_arr[1].trim().split(" ");

  let perms = getPermutations(array)
    .map((ele) => ele.join(" "))
    .sort()
    .join("\n");

  console.log(perms);
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
