let array = [10, 6, 4, 10, 2, 5];

let larger_neighbours = [];
for (let i = array.length - 1; i >= 0; i--) {
  let larger_neighbour = -1;
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] < array[j]) {
      larger_neighbour = array[j];
      break;
    }
  }
  larger_neighbours[i] = larger_neighbour;
}

console.log(larger_neighbours);

let stack = [];
let ans = [];
let i = array.length - 1;
while (i >= 0) {
  while (stack.length && stack[stack.length - 1] <= array[i]) {
    stack.pop();
  }

  if (stack.length) {
    ans[i] = stack[stack.length - 1];
  } else {
    ans[i] = -1;
  }
  stack.push(array[i]);
  i--;
}

console.log(ans);
