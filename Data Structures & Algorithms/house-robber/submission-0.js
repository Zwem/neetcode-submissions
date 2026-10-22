class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const dp = Array.from({ length: nums.length + 1});
        dp[0] = 0;
        dp[1] = nums[0];
        for(let i = 1; i < nums.length; i++) {
            dp[i+1] = Math.max(dp[i], nums[i] + dp[i-1]);
        }
        return dp[dp.length -1];
    }
}
