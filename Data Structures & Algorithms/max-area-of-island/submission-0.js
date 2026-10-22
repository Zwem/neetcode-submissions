class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        const dfs = (i, j)=>{
            if(i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0){
                return 0;
            }
            grid[i][j] = 0;

            return 1 + dfs(i+1, j) + dfs(i-1, j) + dfs(i, j+1) + dfs(i, j-1);
        }
        for(let i = 0; i< grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === 1) {
                    const currentMaxArea = dfs(i, j);
                    maxArea = Math.max(maxArea, currentMaxArea);
                }
            }
        }

        return maxArea;
    }
}
