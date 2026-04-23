class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(const st of strs) {
            const key = st.split('').sort().join('');
            if(!map.has(key)){
                map.set(key, []);
            }
            map.get(key).push(st);
        }
        const res = [];
        for(let [, value] of map.entries()) {
            res.push(value);

        }
        return res; 
    }
}
