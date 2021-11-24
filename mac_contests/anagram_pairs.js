// Time Complexity => O()
// Space Complexity => O()
function anagram_pairs(array, array_obj) {
  let count = 0;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let flag = true;
      for (let keys in array_obj[i]) {
        if (!array_obj[j][keys]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        count++;
      }
    }
  }

  return count;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    let n = Number(input_arr[i]);
    let array = [];
    let array_obj = [];

    let array;
    for (let j = i + 1; j <= i + n; j++) {
      let string = input_arr[j].trim();
      array.push(string);

      let freq_obj = {};
      for (let k = 0; k < string.length; k++) {
        let key = string[k];
        if (!freq_obj[key]) {
          freq_obj[key] = 1;
        } else {
          freq_obj[key] = freq_obj[key] + 1;
        }
      }

      array_obj.push(freq_obj);
    }

    // console.log(array_obj);
    console.log(anagram_pairs(array, array_obj));

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
5
aaaaabbbbb
baabbbbaaa
aaaabbbbba
xxxxxxxxxy
yxxxxxxxxx
2
abcdefghij
jighdefabc
`);
