// Time Complexity => O()
// Space Complexity => O()
function min_t(array, m_days) {
  let low = 1;
  let high = array.reduce((acc, ele) => acc + ele, 0);

  let min_time = Infinity;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (if_possible_within_t(mid, m_days, array)) {
      high = mid - 1;
      min_time = mid;
    } else {
      low = mid + 1;
    }
  }

  return min_time;
}

function if_possible_within_t(x_time, m_days, array) {
  let day_count = 0;
  for (let i = 0; i < array.length; i++) {
    let start_i = i;
    let time_consumed = 0;
    while (time_consumed + array[i] <= x_time) {
      time_consumed = time_consumed + array[i];
      i++;
    }
    if (start_i != i) {
      i--;
    }
    day_count++;
  }

  return day_count <= m_days ? true : false;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  let [_, m_days] = input_arr[0].trim().split(" ").map(Number);
  let array = input_arr[1].trim().split(" ").map(Number);

  console.log(min_t(array, m_days));
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

runProgram(`52 17
9542 10181 11764 26836 11414 11803 1374 26005 26268 17266 32353 17841 533 26079 16336 29061 28539 1864 27142 26058 24371 25289 9922 21527 28680 16727 27446 11431 8664 29091 8282 30045 24717 30529 9606 4613 15183 13578 24896 25053 7161 5823 21587 22100 4809 32239 25377 26385 2651 30234 18745 1847
`);
