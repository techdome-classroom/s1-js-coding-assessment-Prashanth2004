const getTotalIsles = function (grid) {

  // write your code here
   if (!mapGrid || mapGrid.length === 0) return 0;

  const rowCount = mapGrid.length;
  const colCount = mapGrid[0].length;
  let islandCounter = 0;

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (mapGrid[row][col] === 'L') { 
        islandCounter++;
        const stack = [[row, col]];
        while (stack.length > 0) {
          const [currRow, currCol] = stack.pop();
          if (
            currRow < 0 || currRow >= rowCount ||
            currCol < 0 || currCol >= colCount ||
            mapGrid[currRow][currCol] === 'W'
          ) {
            continue;
          }
          mapGrid[currRow][currCol] = 'W';
          stack.push([currRow + 1, currCol]); 
          stack.push([currRow - 1, currCol]); 
          stack.push([currRow, currCol + 1]); 
          stack.push([currRow, currCol - 1]); 
        }
      }
    }
  }
  return islandCounter;
};

module.exports = getTotalIsles;