class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let maxArea = 0;
        for(let i = 0; i < heights.length; i++ ) {
            let indexToPush = i;
            while(stack.length > 0 && stack[stack.length -1].val >  heights[i]) {
                const currentItem = stack.pop();
                const currentArea = (i - currentItem.index) * currentItem.val;
                indexToPush = currentItem.index;
                maxArea = Math.max(currentArea, maxArea);
            }
            stack.push({
                val: heights[i],
                index: indexToPush,
            })
        }
        while(stack.length > 0) {
            const currentItem = stack.pop();
            const currentArea = (heights.length - currentItem.index) * currentItem.val;
            maxArea = Math.max(currentArea, maxArea);
        }


        return maxArea;
    }
}
