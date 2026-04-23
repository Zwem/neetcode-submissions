class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false;
        }
        let map = new Map();
        for(const ch of s) {
            if(!map.has(ch)){
                map.set(ch, 0);
            }
            map.set(ch, map.get(ch) + 1);
        }
        for(const ch of t) {
            if(!map.has(ch)) {
                return false;
            }
            const currentAmount = map.get(ch);
            if(currentAmount === 1) {
                map.delete(ch);
                continue;

            }
            map.set(ch, map.get(ch) - 1);
        }
        return map.size === 0; 
    }
}
