class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        const res = [];
        const bs = [];

        for(const num of nums) {
            if(!map.has(num)) {
                map.set(num, 0)
            }
             map.set(num, map.get(num) + 1);
        }

        for(const [key, value] of map.entries()) {
            if(bs[value] === undefined) {
                bs[value] = [];
            }
            bs[value].push(key);
        }

        for(let i=bs.length -1; i>= 0 ; i-- ) {
            if(bs[i] === undefined) {
                continue;
            }
            res.push(...bs[i]);
            if(res.length === k) {
                return res;
            }

        }
    }
}
