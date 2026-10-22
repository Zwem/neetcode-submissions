class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) {
            return "";
        }
        let prefix = [];
        for(const str of strs) {
            prefix.push(str.length);
        }

        return prefix.join('_') + '#' + strs.join('');
        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "") {
            return [];
        }
        const [prefix, ] = str.split('#');
        let startIndex = prefix.length + 1;
        let strs = [];
        for(const length of prefix.split('_')) {
            const currenStr = str.substring(startIndex, startIndex + Number(length));
        
            strs.push(currenStr);
        
           
            startIndex = startIndex + Number(length);
        }
        return strs;
    }
}