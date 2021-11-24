// Time Complexity => O()
// Space Complexity => O()
// }
let flag = false;
function word_possible(to_be_formed, dict, i, string, formed) {
  if (i == to_be_formed.length) {
    if (formed == to_be_formed) {
      flag = true;
    }
    return;
  }

  string += to_be_formed[i];
  if (dict[string]) {
    word_possible(to_be_formed, dict, i + 1, "", formed + string);
  }
  word_possible(to_be_formed, dict, i + 1, string, formed);
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    let [_, no_words_in_dict] = input_arr[i].trim().split(" ").map(Number);
    let to_be_formed = input_arr[i + 1].trim();
    let dict = {};

    for (let j = i + 2; j <= i + 1 + no_words_in_dict; j++) {
      let word = input_arr[j].trim();
      dict[word] = 1;
    }

    word_possible(to_be_formed, dict, 0, "", "");
    if (flag) {
      console.log("Yes");
    } else {
      console.log("No");
    }

    flag = false;
    // console.log(to_be_formed);
    // console.log(dict);
    i = i + 1 + no_words_in_dict;
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
5 4
masai
as
mas
ai
asai
4 2
hack
hac
ack
`);

runProgram(`1
2 2
ab
a
ab`);
