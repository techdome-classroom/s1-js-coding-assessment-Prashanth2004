const getTotalIsles = function (grid) {
  
  // write your code here
    if (!grid || grid.length === 0) return 0; 
    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;
    const dfs = (row, col) => {
      if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 'W') {
        return;
      }
      grid[row][col] = 'W';
      dfs(row + 1, col);
      dfs(row - 1, col);
      dfs(row, col + 1);
      dfs(row, col - 1); 
    };
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