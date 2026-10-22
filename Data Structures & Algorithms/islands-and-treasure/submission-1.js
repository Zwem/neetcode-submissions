class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let queue = []
        let dist = 0;
        const dr = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === 0) {
                    queue.push([i, j])
                }
            }
        }
        while(queue.length > 0) {
            let nextQueue = [];
            for(let [i, j] of queue) {
                for(const [eI, eJ] of dr) {
                    const nI = i + eI;
                    const nJ = j + eJ;
                    if(nI >= 0 && nI < grid.length && nJ>=0 && nJ < grid[nI].length && grid[nI][nJ] === 2147483647) {
                        grid[nI][nJ] = dist + 1;
                        nextQueue.push([nI, nJ]);
                    }
                }
            }
            dist++;
            queue = nextQueue;
        }

        return grid;
    }
}