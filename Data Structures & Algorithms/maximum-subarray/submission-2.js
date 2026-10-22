class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let currentSum = 0
        for(const num of nums) {
            currentSum+=num;
            maxSum = Math.max(currentSum, maxSum);
            currentSum = Math.max(currentSum, 0);
        }
        return maxSum;
    }
}