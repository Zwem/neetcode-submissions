class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxLength = 0;
        let set = new Set(nums);
        for(const num of set) {
            if(!set.has(num-1)) {
                let current = num;
                while(set.has(current)) {
                    current++;
                }
                maxLength = Math.max(maxLength, current -  num);
            }

        }

        return maxLength;
    }
}
