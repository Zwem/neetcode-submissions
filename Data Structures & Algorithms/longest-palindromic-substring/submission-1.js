class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const helper = (l, r)=>{
            while(s[l] === s[r] && s[l] !== undefined && s[r] !== undefined) {
                l--;
                r++

            }
            return s.substring(l + 1, r);
        }
        let res = '';

        for(let i = 0; i< s.length; i++) {
            const f = helper(i, i);
            const sec = helper(i, i+1)
            if(f.length > res.length) {
                res = f
            }
            if(sec.length > res.length){
                res = sec;
            }
        }
        return res;
    }
}
