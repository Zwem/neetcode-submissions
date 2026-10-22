class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixSum = new Map();
        prefixSum.set(0, 1);
        let sum = 0;
        let res = 0;
        for(const num of nums) {
            sum+= num;
            let pre = sum - k;
            if(prefixSum.has(pre)){
                res+= prefixSum.get(pre);
            }
            prefixSum.set(sum, (prefixSum.get(sum) || 0) +1);

        }


        return res;
    }
}
