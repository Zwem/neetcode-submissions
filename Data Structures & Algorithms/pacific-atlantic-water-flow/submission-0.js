class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const pSet = new Set();
        const aSet = new Set();
        const res = [];
        let pQueue = [];
        let aQueue = [];
        const dr = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        for(let i = 0; i < heights.length; i++) {
            for(let j = 0; j < heights[i].length; j++) {
                const key = `${i}_${j}`;
                if(i === 0 || j === 0) {
                    pSet.add(key);
                    pQueue.push([i, j]);
                }
                if(i === heights.length -1 || j === heights[i].length -1){
                    aSet.add(key);
                    aQueue.push([i, j]);
                }
                if(aSet.has(key) && pSet.has(key)) {
                    res.push([i, j]);
                }
            }
        }
        const bfs = (queue, set, oSet)=> {
            while(queue.length > 0) {
                const nextQueue = [];
                for(const [i, j] of queue) {
                    for(const [eI, eJ] of dr) {
                        const nI = eI + i;
                        const nJ = eJ + j;
                        if(nI >=0 && nI < heights.length && nJ>=0 && nJ < heights[nI].length 
                            && !set.has(`${nI}_${nJ}`) && heights[nI][nJ] >= heights[i][j]) {
                                nextQueue.push([nI, nJ]);
                                set.add(`${nI}_${nJ}`);
                                if(oSet.has(`${nI}_${nJ}`)) {
                                    res.push([nI,nJ]);

                                }
                        }

                    }
                }
                queue = nextQueue;
            }
        }
        bfs(pQueue, pSet, aSet);
        bfs(aQueue, aSet, pSet);
        return res;

    }
}
