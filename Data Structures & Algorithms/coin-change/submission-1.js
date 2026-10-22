class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = Array.from({ length: amount + 1 });
        dp[0] = 0;
        for(let i = 1; i<= amount; i++) {
            let min = Infinity;
            for(const coin of coins) {
                if(coin <= i &&  dp[i - coin] !== -1) {
                    min = Math.min(1 + dp[i - coin], min);
                }
            }
            dp[i] = min === Infinity ? -1 : min;
        }
        return dp[dp.length - 1];
    }
}

/* [0,1,2,3,4,1,2,-1,-1,-1,1,-1,-1]*/
/* [0,1, 2,3,4,5] */
