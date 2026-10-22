class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        const dfs = (i, j, array)=>{
            if(i < 0 || i >= array.length ||  j < 0 || j >=array[0].length || array[i][j] === '0') {
                return;
            }
            array[i][j] = '0';
            dfs(i+1, j, array);
            dfs(i-1, j, array);
            dfs(i, j+1, array);
            dfs(i, j-1, array);
        }

        for(let i=0; i < grid.length; i++) {
            for(let j=0; j < grid[i].length; j++) {
                if(grid[i][j] === '1') {
                    dfs(i, j, grid);
                    count++;
                }
            }
        }

        return count;
    }
}
