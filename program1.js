const getTotalIsles = function (grid) {


  // write your code here

  const getTotalIsles = function (grid) {
    if (!grid || grid.length === 0) return 0;
  
    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;
  
    // Helper function to perform DFS
    const dfs = (row, col) => {
      // Check boundaries and if the cell is water or already visited
      if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 'W') {
        return;
      }
      
      // Mark the cell as visited by setting it to 'W'
      grid[row][col] = 'W';
  
      // Recursively visit all neighboring land cells (up, down, left, right)
      dfs(row + 1, col); // down
      dfs(row - 1, col); // up
      dfs(row, col + 1); // right
      dfs(row, col - 1); // left
    };
  
    // Main loop to go through the grid
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === 'L') { 
          islandCount++;
          dfs(row, col);
        }
      }
    } 
    return islandCount;
};

module.exports = getTotalIsles;