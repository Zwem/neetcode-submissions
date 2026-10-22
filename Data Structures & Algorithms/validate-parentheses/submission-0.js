class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = {
            '(' : ')',
            '{' : '}',
            '[' : ']',
        }
        let stack = [];
        for(const par of s) {
            if(map[par] !== undefined) {
                stack.push(par);
            } else if(map[stack[stack.length -1]] === par) {
                stack.pop();
            } else {
                return false;
            }

        }


        return stack.length === 0;
    }
}
