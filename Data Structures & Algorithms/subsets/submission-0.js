class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        const backtrack = (arr, i)=>{
            if(i === nums.length) {
                res.push([...arr]);
                return;
            }
            arr.push(nums[i]);
            backtrack(arr, i + 1);
            arr.pop();
            backtrack(arr, i + 1);
        }
        backtrack([], 0);
        return res;
    }
}
