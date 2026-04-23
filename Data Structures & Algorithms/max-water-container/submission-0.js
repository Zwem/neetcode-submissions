class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxContain = 0;
        let l = 0;
        let r = heights.length - 1;
        while(l < r) {
            const currentContain = Math.min(heights[l], heights[r]) * (r -l);
            maxContain = Math.max(maxContain, currentContain);
            if(heights[l]<= heights[r]) {
                l++;

            } else {
                r--;
            }

        }


        return maxContain;
    }
}
