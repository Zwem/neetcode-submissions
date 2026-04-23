class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isValidChar =  (char) =>{
            if (!char) return false;
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
        let l = 0;
        let r = s.length - 1;
        while(l <= r) {
            while(!isValidChar(s[l]) && l <= r){
                l++;
            }
            while(!isValidChar(s[r]) && l <= r){
                r--;
            }
            if(l <= r && s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
