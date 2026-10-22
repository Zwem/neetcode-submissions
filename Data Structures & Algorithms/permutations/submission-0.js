class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        if(nums.length === 0) {
            return [[]];
        }
        const perms = this.permute(nums.slice(1));
        const res = [];
        for(let perm of perms) {
            for(let i = 0; i<= perm.length; i++) {
                let newPerm = [...perm];
                newPerm.splice(i, 0, nums[0]);
                res.push(newPerm);
            }
        }
        return res;
    }
}
