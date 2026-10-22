class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const maxQueue = new MaxPriorityQueue((element) => element.val);
        const result = Array.from({length: nums.length - k + 1})
        for(let i = 0; i < k; i++) {
            maxQueue.enqueue({
                val: nums[i],
                i
            });
        }
        result[0] = maxQueue.front().val;
        let l = 1;
        let r = l + k -1;
        while(r < nums.length) {

            maxQueue.enqueue({
                val: nums[r],
                i: r,
            });
            while(maxQueue.front().i < l) {
                maxQueue.dequeue();
            }
            result[l] = maxQueue.front().val;
            l++;
            r++;
        }
        return result;

    }
}
