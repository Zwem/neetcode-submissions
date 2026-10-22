class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        if(x < 0) {
            return false;
        }
        return String(x) === String(x).split('').reverse().join('');
    }
}
