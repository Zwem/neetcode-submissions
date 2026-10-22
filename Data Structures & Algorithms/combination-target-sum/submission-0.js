class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const backtracking = (arr, sum, i)=>{
            if(sum > target || i >= nums.length) {
                return;
            }
            if(sum === target) {
                res.push([...arr]);
                return;
            }
            arr.push(nums[i]);
            sum+=nums[i];
            backtracking(arr, sum, i);
            arr.pop();
            sum-=nums[i];
            backtracking(arr, sum, i + 1);
        }
        backtracking([], 0, 0);

        return res;
    }
}
