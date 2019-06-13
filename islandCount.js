function islandCount(binaryMatrix) {
  // your code goes here
  let islands = 0;
  let rows = binaryMatrix.length;
  let cols = binaryMatrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let val = binaryMatrix[i][j];
      if (val === 1) {
        islands++;
        switchTo2(binaryMatrix, i, j, rows, cols);
      }
    }
  }
  return islands;
}

function switchTo2(binaryMatrix, row, col, rows, cols) {
  binaryMatrix[row][col] = 2;
  if (row > 0) {
    binaryMatrix[row - 1][col] = 2;
  }
  if (row < rows - 1) {
    binaryMatrix[row + 1][col] = 2;
  }
  if (col < cols - 1) {
    binaryMatrix[row][col + 1] = 2;
  }
  if (col > 0) {
    binaryMatrix[row][col - 1] = 2;
  }
  console.log(binaryMatrix);
}

module.exports = islandCount;
