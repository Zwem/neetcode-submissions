class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = Array.from({length: numCourses}, ()=> []);
        const visiting = new Set();
        for(const [course, pre] of prerequisites) {
            adj[course].push(pre);
        }
        const dfs = (course)=>{
            if(visiting.has(course)) {
                return false;
            }
            if (adj[course].length === 0) return true;
            
            visiting.add(course);
            for(const c of  adj[course]) {
                if(!dfs(c)) {
                    return false;
                }
            }
            visiting.delete(course);
            adj[course] = [];
            return true;

        }
        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)){
                return false;
            }
        }
        return true;
    }
}
