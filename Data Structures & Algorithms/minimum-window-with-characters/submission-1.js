class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tMap = new Map();
        let sMap = new Map();
        let l = 0;
        let res = null;
        let isIncluded = () => {
            for(const key of tMap.keys()) {
                if(sMap.get(key) < tMap.get(key)){
                    return false;
                }
            }
            return true;
        }

        for(const char of t) {
            tMap.set(char, (tMap.get(char) || 0) +1);
            sMap.set(char, 0);
        }
        let uniqElemetnsLeft = tMap.size;
        for(let r = 0; r < s.length; r++) {
            if(sMap.has(s[r])) {
                sMap.set(s[r], sMap.get(s[r])+ 1);
                if(sMap.get(s[r]) === tMap.get(s[r])) {
                    uniqElemetnsLeft--;
                }
            }

            while(uniqElemetnsLeft === 0) {
                if(res === null || res.length > (r - l + 1)){
                    res = s.substring(l, r +1);
                }
                if(sMap.has(s[l])) {
                    sMap.set(s[l], sMap.get(s[l])- 1);
                    if(sMap.get(s[l]) < tMap.get(s[l])) {
                        uniqElemetnsLeft++;
                    }
                }
                l++;
            }
        }

        return res === null ? '' : res;

    }
}
