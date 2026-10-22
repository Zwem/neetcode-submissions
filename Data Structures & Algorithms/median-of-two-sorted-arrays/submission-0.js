class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let [a, b] = [nums1, nums2];
        let total = a.length + b.length;
        let half = Math.floor(total / 2);
        if(a.length > b.length) {
            [a, b] = [b, a];
        }
        let [l, r] = [0, a.length -1];
        while(true) {
            let i = Math.floor((l+r) / 2);
            let j = half - i - 2;

            let aLeft = i < 0 ? -Infinity : a[i];
            let aRight =  i + 1 >= a.length ? Infinity : a[i+1];
            let bLeft = j < 0 ? -Infinity : b[j];
            let bRight = j + 1 >= b.length ? Infinity : b[j+1];
            if(aLeft <=  bRight && bLeft <= aRight) {
                if(total % 2) {
                    return Math.min(aRight, bRight);
                } else {
                    return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
                }
            } else if(aLeft > bRight) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }
    }
}
