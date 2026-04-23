class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isValidChar =  (char) =>{
            let code = char.charCodeAt(0);
            if (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) {
                return true;

            }
            if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) {
                return true;

            }
            if (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) {
                return true;
            }

            return false;
        }
        let newS = '';
        for(let i=s.length -1;i>=0;i--) {
            const ch = s[i];
            if(isValidChar(ch)) {
                newS+=ch.toLowerCase();
            }
        }
        return newS === newS.split('').reverse().join('');
    }
}
