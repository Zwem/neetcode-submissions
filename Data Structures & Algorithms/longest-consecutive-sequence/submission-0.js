class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxLength = 0;
        let set = new Set(nums);
        for(let i = 0; i < nums.length; i++) {
            if(!set.has(nums[i]-1)) {
                let current = nums[i];
                while(set.has(current)) {
                    current++;
                }
                maxLength = Math.max(maxLength, current -  nums[i]);
            }

        }

        return maxLength;
    }
}
