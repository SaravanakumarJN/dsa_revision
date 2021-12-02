// Time Complexity => O()
// Space Complexity => O()
function max_distance(seat_positions, M) {
  let low = 0;
  let high = seat_positions[seat_positions.length - 1];
  let max_range;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (if_possible_to_arrange_with_given_distance(seat_positions, M, mid)) {
      low = mid + 1;
      max_range = mid;
    } else {
      high = mid - 1;
    }
  }

  return max_range;
}

function if_possible_to_arrange_with_given_distance(
  seat_positions,
  M,
  distance
) {
  let prev_filled_position = 0;
  let filled_seats = 1;
  for (let i = 1; i < seat_positions.length; i++) {
    if (filled_seats >= M) {
      break;
    }
    if (seat_positions[i] - seat_positions[prev_filled_position] >= distance) {
      filled_seats++;
      prev_filled_position = i;
    }
  }
  return filled_seats >= M;
}

function runProgram(input) {
  let input_arr = input.trim().split("\n");

  for (let i = 1; i < input_arr.length; i++) {
    let [N, M] = input_arr[i].trim().split(" ").map(Number);
    let seat_positions = [];
    for (let j = i + 1; j <= i + N; j++) {
      seat_positions.push(Number(input_arr[j]));
    }

    seat_positions.sort((a, b) => a - b);
    console.log(max_distance(seat_positions, M));
    i = i + N;
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
10 5
43
45
10
45
26
4
19
38
48
17
10 3
48
17
4
47
23
3
3
19
27
10`);
