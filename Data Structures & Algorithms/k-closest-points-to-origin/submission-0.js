class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        points.sort((a, b)=> {
            const aDist = Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2));
            const bDist = Math.sqrt(Math.pow(b[0], 2) + Math.pow(b[1], 2)) 
            return aDist - bDist;
            
        });


        return points.slice(0, k);
    }
}
