let string = "AABCDEBAZ";

let tab = new Array(string.length).fill(0);
tab = tab.map(() => new Array(string.length).fill(0));

let max = -Infinity;

for (let k = 0; k < tab[0].length; k++) {
  let j = k;
  for (let i = 0; i < tab.length; i++) {
    if (j < tab[0].length) {
      // one element
      if (i == j) {
        tab[i][j] = 1;
      }
      // two elements
      else if (i + 1 == j) {
        if (string[i] === string[j]) {
          tab[i][j] = 2;
        } else {
          tab[i][j] = 1;
        }
      }
      // > 2
      else {
        // start == end
        if (string[i] == string[j]) {
          tab[i][j] = Math.max(tab[i][j - 1], 2 + tab[i + 1][j - 1]);
        }
        // start != end
        else {
          tab[i][j] = Math.max(tab[i][j - 1], tab[i + 1][j]);
        }
      }

      max = Math.max(max, tab[i][j]);
      j++;
    } else {
      break;
    }
  }
}

console.log(max);
