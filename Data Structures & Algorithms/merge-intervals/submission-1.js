class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let res = [];
        intervals.sort((a, b)=>{
            if(a[0] === b[0]) {
                return b[1] - a[1];
            }
            return a[0] - b[0];
        });
        res.push(intervals[0]);
        for(let i = 1; i < intervals.length; i++) {
            let last = res[res.length - 1];
            if(intervals[i][0] > last[1]) {
                res.push(intervals[i]);
            } else {
                last[1] = Math.max(last[1], intervals[i][1]);
            }
        }
        return res;
    }
}
