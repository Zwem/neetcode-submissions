class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = Array.from({length: numCourses}, ()=> []);
        for(const [course, pre] of prerequisites) {
            adj[course].push(pre);
        }
        const dfs = (course, set = new Set())=>{
            if(set.has(course)) {
                return false;
            }
            set.add(course);
            for(const c of  adj[course]) {
                if(!dfs(c, set)) {
                    return false;
                }
            }
            set.delete(course);
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
