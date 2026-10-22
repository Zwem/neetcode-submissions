class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;

        const helper = (l, r)=> {
            while(l <= r && l >=0 && l < s.length && r >=0 && r < s.length) {
                if(s[l] !== s[r]) {
                    return;
                }
                count++;
                l--;
                r++;

            }
        }

        for(let i = 0; i < s.length; i++) {
            helper(i, i);
            helper(i, i+1);
        }

        return count;
    }
}
