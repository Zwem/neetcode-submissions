class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let r = matrix.length - 1;
        let row = undefined;
        while(l <= r) {
            const m = Math.floor((r+l)/2);
            if(target < matrix[m][0]) {
                r = m - 1;
            } else if(target > matrix[m][matrix[m].length - 1]) {
                l = m + 1
            } else {
                row = matrix[m];
                break;
            }
        }
        if(row === undefined) {
            return false;
        }
        l = 0;
        r = row.length -1;
        while(l<=r) {
            const m = Math.floor((r+l)/2);
            if(row[m] < target) {
                l = m + 1;
            } else if (row[m] > target){
                r = m - 1;
            } else {
                return true;
            }


        }


        return false
    }
}
