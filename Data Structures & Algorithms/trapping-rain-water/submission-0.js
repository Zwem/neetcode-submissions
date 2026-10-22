class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxHeight = height[0];
        let maxHeightIndex = 0;

        let area = 0;
        let currentArea = 0;

        for(let i = 1; i < height.length; i++) {
            if(height[i]>= maxHeight) {
                area+=currentArea;
                currentArea = 0;

                maxHeight = height[i];
                maxHeightIndex = i;
            } else {
                currentArea+= maxHeight - height[i];
            }
        }

        currentArea = 0;
        maxHeight = height[height.length-1];
        for(let i = height.length-2; i>=maxHeightIndex; i--) {
             if(height[i]>= maxHeight) {
                area+=currentArea;
                currentArea = 0;

                maxHeight = height[i];
            } else {
                currentArea+= maxHeight - height[i];
            }

        }

        return area;
    }
}
