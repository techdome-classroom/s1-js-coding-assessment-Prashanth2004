const getTotalIsles = function (grid) {

  // write your code here
   if (!mapGrid || mapGrid.length === 0) return 0;

  const rowCount = mapGrid.length;
  const colCount = mapGrid[0].length;
  let islandCounter = 0;

  // Iterate over each cell in the grid
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (mapGrid[row][col] === 'L') { // Found an unvisited land cell
        islandCounter++;

        // Stack for iterative DFS
        const stack = [[row, col]];

        // Explore the entire island
        while (stack.length > 0) {
          const [currRow, currCol] = stack.pop();

          // Check boundaries and skip if the cell is water
          if (
            currRow < 0 || currRow >= rowCount ||
            currCol < 0 || currCol >= colCount ||
            mapGrid[currRow][currCol] === 'W'
          ) {
            continue;
          }

          // Mark the cell as visited by setting it to 'W'
          mapGrid[currRow][currCol] = 'W';

          // Push adjacent cells to the stack for further exploration
          stack.push([currRow + 1, currCol]); // down
          stack.push([currRow - 1, currCol]); // up
          stack.push([currRow, currCol + 1]); // right
          stack.push([currRow, currCol - 1]); // left
        }
      }
    }
  }
  return islandCounter;
};

module.exports = getTotalIsles;