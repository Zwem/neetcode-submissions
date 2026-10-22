class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        candidates.sort((a, b) => a - b);

        const backtracking = (arr, sum, i) =>{

            if(sum === target) {
                res.push([...arr]);
                return;
            }
            if(sum > target || i >= candidates.length) {
                return;
            }
            arr.push(candidates[i]);
            backtracking(arr, sum + candidates[i], i + 1);
            arr.pop();

            while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
                i++;
            }
            backtracking(arr, sum, i + 1);
        }
        backtracking([], 0, 0);
        return res;
    }
}
