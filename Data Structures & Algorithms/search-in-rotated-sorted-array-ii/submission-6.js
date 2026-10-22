class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        while(l <= r) {
            let m = Math.floor((r + l) / 2);
            if(nums[m] === target) {
                return true;
            }
            if(nums[l] === nums[m] && nums[l] === nums[r]){
                l++;
                r--;
                continue;
            }
            if(nums[l] <= nums[m]) {
                if(nums[l] <= target && nums[m] > target){
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                if(nums[m] < target && nums[r] >= target) {
                    l = m + 1;
                   
                } else {
                     r = m - 1;
                }
                
            }
        }



        return false;
    }
}
