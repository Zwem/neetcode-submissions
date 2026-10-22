class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let [res, count] =  [0, 0];
        for(const num of nums) {
            if(count === 0) {
                res = num;
            }
            count+= num === res ? 1 : -1;
        }
        return res; 
    }
}
