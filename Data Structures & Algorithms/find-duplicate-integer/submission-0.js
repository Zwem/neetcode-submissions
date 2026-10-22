class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;
        while(true) {
            [slow, fast] = [nums[slow], nums[nums[fast]]];
            if(slow === fast) {
                break;
            }
        }
        fast = 0;
        while(true) {
            [slow, fast] = [nums[slow], nums[fast]];
            if(slow === fast) {
               return slow;
            }
        }
    }
}
