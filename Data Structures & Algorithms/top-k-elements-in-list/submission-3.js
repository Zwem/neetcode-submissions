class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        const res = [];
        const buckets = Array.from({
            length: nums.length + 1
        }, ()=> []);

        for(const num of nums) {
            if(!map.has(num)) {
                map.set(num, 0)
            }
             map.set(num, map.get(num) + 1);
        }

        for(const [key, value] of map.entries()) {
            buckets[value].push(key);
        }

        for(let i=buckets.length -1; i>= 0 ; i-- ) {
            for(const num of buckets[i]) {
                res.push(num);
                if(res.length === k) {
                    return res;
                }
            }

        }
        return res;
    }
}
