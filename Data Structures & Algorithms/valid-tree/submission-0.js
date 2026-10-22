class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length !== n - 1) {
            return false;
        }
        const adj = Array.from({ length: n}, ()=> []);
        for(const [s, e] of edges) {
            adj[s].push(e);
            adj[e].push(s);
        }
        const visited = new Set();
        const dfs = (i)=>{
            if(visited.has(i)) {
                return;
            }
            visited.add(i);
            for(const n of adj[i]) {
                dfs(n);
            }
        }
        dfs(0);
        if(visited.size !== n) {
            return false;
        }

        return true;

    }
}
