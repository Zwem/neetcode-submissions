class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let index = 0;
        let res = '';
        while(true) {
            let current =  null;
            for(const str of strs) {
                if (index >= str.length) {
                    return res;
                }
                if(current === null) {
                    current = str[index];
                }
                if(current !== str[index]) {
                    return res;
                }
            }
            index++;
            res+= current;
        }
    }
}
