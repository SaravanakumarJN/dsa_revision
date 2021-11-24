let array = [10, 6, 4, 10, 2, 5];

let smallest_neighbours = [];
for (let i = 0; i < array.length; i++) {
  let smallest_neighbour = -1;
  for (let j = i - 1; j >= 0; j--) {
    if (array[i] > array[j]) {
      smallest_neighbour = array[j];
      break;
    }
  }

  smallest_neighbours.push(smallest_neighbour);
}
console.log(smallest_neighbours);

let ans = [];
let stack = [];
let i = 0;
while (i < array.length) {
  while (stack.length && stack[stack.length - 1] >= array[i]) {
    stack.pop();
  }

  if (stack.length) {
    ans.push(stack[stack.length - 1]);
  } else {
    ans.push(-1);
  }
  stack.push(array[i]);
  i++;
}

console.log(ans);
