class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];
        let sum = 1;
        for(let i = 0; i < nums.length; i++) {
            res[i] = sum;
            sum*=nums[i];
        }
        sum = 1;
        for(let i = nums.length -1; i>=0; i--) {
            res[i] = res[i] * sum;
            sum*=nums[i];
        }

        return res;
    }
}
