let ar1 = [1, 3, 5, 7];
let ar2 = [2, 4, 6, 8];

let sorted = [];
let i = 0;
let j = 0;
while (i < ar1.length && j < ar2.length) {
  if (ar1[i] < ar2[j]) {
    sorted.push(ar1[i]);
    i++;
  } else {
    sorted.push(ar2[j]);
    j++;
  }
}

if (i < ar1.length) {
  for (let x = i; x < ar1.length; x++) {
    sorted.push(ar1[x]);
  }
}
if (j < ar2.length) {
  for (let x = j; x < ar2.length; x++) {
    sorted.push(ar2[x]);
  }
}

console.log(sorted);
