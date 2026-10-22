class Solution {
    /**
     * @param {number[]} target
     * @return {number}
     */
    minNumberOperations(target) {
        let count = target[0];
        for(let i = 1; i < target.length; i++) {
            if(target[i] > target[i-1]) {
                count+= target[i] - target[i-1];
            }

        }
        return count;
    }
}
