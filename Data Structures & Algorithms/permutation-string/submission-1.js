class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const need = new Map();
        const extra = new Map();
        let l = 0;
        const s1Length = s1.length;
        for(let i = 0; i < s1Length; i++) {
            need.set(s1[i], (need.get(s1[i]) || 0) + 1);
        }

        for(let r = 0; r < s2.length; r++) {
            if(r - l === s1Length) {
                if(extra.has(s2[l])) {
                    let count = extra.get(s2[l]);
                    if(count === 1) {
                        extra.delete(s2[l]);
                    } else {
                        extra.set(s2[l], extra.get(s2[l]) - 1);
                    } 
                } else {
                    need.set(s2[l], (need.get(s2[l]) || 0) +1);

                }
                l++;
            }
            if(need.has(s2[r])) {
                let count = need.get(s2[r]);
                if(count === 1) {
                    need.delete(s2[r]);
                } else {
                    need.set(s2[r], need.get(s2[r]) - 1);
                } 
            } else {
                extra.set(s2[r], (extra.get(s2[r]) || 0) + 1 );
            }
            if(need.size === 0 && extra.size === 0) {
                return true;
            }
        }

        return false;
    }
}