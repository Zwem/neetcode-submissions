class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) {
            return nums[0];

        }

        const helper = (l, r)=>{
            let rob1 = 0;
            let rob2 = nums[l];
            for(let i = l+1; i <= r; i++) {
                let temp = Math.max(nums[i]+ rob1, rob2);
                rob1 = rob2;
                rob2 = temp;
            }
            return rob2;
        }

        return Math.max(helper(0, nums.length -2), helper(1, nums.length -1));

    }
}
