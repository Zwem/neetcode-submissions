class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let min = 0;
        let queue = [];
        const dr = [[0,1], [0, -1], [1, 0], [-1, 0]];
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === 2) {
                    queue.push([i, j]);
                }
            }
        }
        while(queue.length > 0) {
            const nextQueue = [];
            for(const [i, j] of queue) {
                for(const [eI, eJ] of dr) {
                    const nI = i + eI;
                    const nJ = j + eJ;
                    if(nI >= 0 && nI < grid.length && nJ >= 0 && nJ < grid[nI].length && grid[nI][nJ] === 1) {
                        grid[nI][nJ] = 2;
                        nextQueue.push([nI, nJ]);
                    }
                }
            }
            queue = nextQueue;
            if(queue.length > 0){
                  min++;
            }
        }
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === 1) {
                    return -1;
                }
            }
        }


        return min;
    }
}
