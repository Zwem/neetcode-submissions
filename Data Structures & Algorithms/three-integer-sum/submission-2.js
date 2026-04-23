class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums.sort((a,b)=>a-b);


        const twoSum = (firstNum, arr) =>{
            const resTowSum = [];
            let l = 0;
            let r = arr.length -1;
            while(l<r) {
                if(firstNum + arr[l] + arr[r] > 0) {
                    r--;
                } else if (firstNum + arr[l] + arr[r] < 0){
                    l++
                } else {
                    resTowSum.push([firstNum, arr[l], arr[r]]);
                    while(arr[l] === arr[l+1]) {
                        l++;
                    }
                    while(arr[r] === arr[r-1]) {
                        r--;
                    }
                    r--;
                    l++
                }
            }
            return resTowSum;
        }

        for(let i=0; i<nums.length-2; i++) {
            if (nums[i] > 0) break;
            if(nums[i] === nums[i-1]) {
                continue;
            }
            const resTowSum = twoSum(nums[i], nums.slice(i+1));
            if(resTowSum.length >0) {
                res.push(...resTowSum);
            }

        }

        return res;
    }
}
// [1,2,3,4,5,6,7]