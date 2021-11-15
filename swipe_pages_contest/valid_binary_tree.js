let array = [
  [6, 2],
  [4, 2],
  [9, 3],
  [10, 5],
  [5, 3],
  [12, 3],
  [2, 1],
  [3, 1],
];

/*
 2     3       5        1
6 4  9   5   10  null  2  3 

        1
  2           3
6   4       9    5
              10
*/

let parents = {};
for (let i = 0; i < array.length; i++) {
  // console.log(parents[array[i][1]], i);
  if (!parents[array[i][1]]) {
    parents[array[i][1]] = [array[i][0]];
  } else {
    parents[array[i][1]] = [...parents[array[i][1]], array[i][0]];
  }
}

// console.log(parents);
console.log(valid_bt_check(parents));
function valid_bt_check(parents) {
  let head_allowance = 0;
  for (let key in parents) {
    if (parents[key].length > 2) {
      return "not valid";
    }

    let flag = false;
    for (let key1 in parents) {
      if (key == key1) {
        continue;
      }

      if (parents[key1][0] == key || parents[key1][1] == key) {
        flag = true;
      }
    }

    if (flag == false) {
      head_allowance++;
    }

    if (head_allowance > 1) {
      return "not valid";
    }
  }

  return "valid";
}
