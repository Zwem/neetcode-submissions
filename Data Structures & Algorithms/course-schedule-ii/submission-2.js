class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
    const ajs  = Array.from({ length: numCourses}, ()=> []);
    const indegree  = Array.from({ length: numCourses}, ()=> 0);
    const res = [];
    let queue = [];
    for(const [course, prerequisit] of prerequisites) {
        ajs[prerequisit].push(course);
        indegree[course]++;
    }
    for(let i = 0; i < numCourses; i++) {
        if(indegree[i] === 0) {
            queue.push(i);
        }
    }
    while(queue.length > 0) {
        const nextQueue = [];
        for(const course of queue) {
            res.push(course);
            for(const nextCourse of ajs[course]) {
                indegree[nextCourse]--;
                if(indegree[nextCourse] === 0) {
                    nextQueue.push(nextCourse);
                }
            }
        }
        queue = nextQueue;
    }

    return res.length === numCourses ? res : [];
    }
}
