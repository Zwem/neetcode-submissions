class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deque = [];
        let head = 0;
        let l = 0;
        let r = 0;
        const result = [];
        while(r < nums.length) {
            while(deque[head] !== undefined && nums[deque[deque.length - 1]] < nums[r]) {
                deque.pop();
            }
            deque.push(r);
            if(l > deque[head]) {
                head++;
            }
            if(r + 1 >= k) {
                result.push(nums[deque[head]]);
                l++;
            }
            r++;

        }
        return result;

    }
}
