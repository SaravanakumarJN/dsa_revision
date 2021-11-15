function MatrixChallenge(strArr) {
  let matrix = [];
  for (let i = 0; i < strArr.length; i++) {
    matrix.push(strArr[i].split(""));
  }

  let vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[0].length - 1; j++) {
      if (
        vowels[matrix[i][j]] &&
        vowels[matrix[i][j + 1]] &&
        vowels[matrix[i + 1][j]] &&
        vowels[matrix[i + 1][j + 1]]
      ) {
        return `${i}-${j}`;
      }
    }
  }

  return "not found";
}

let input = ["ayuio", "etzae", "aabbb"];
console.log(MatrixChallenge(input));
