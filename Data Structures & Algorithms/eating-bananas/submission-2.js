class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        while(l < r) {
            const m = Math.floor((l+r)/2);
            let hours = 0
            for(const pile of piles) {
                hours+= Math.ceil(pile/ m);
            }
            if(hours > h) {
                l = m + 1;
            } else {
                r = m;
            }

        }

        return l;
    }
}
