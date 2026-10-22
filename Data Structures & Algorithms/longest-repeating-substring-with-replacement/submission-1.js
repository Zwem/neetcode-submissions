class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let l = 0;
        let max = 0;
        for(let r=0; r < s.length; r++) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            while((r - l + 1) - Math.max(...map.values()) > k) {
                map.set(s[l], map.get(s[l]) - 1);
                l++;
            }
            max = Math.max(max, r - l + 1);


        }

        return max;
    }
}
