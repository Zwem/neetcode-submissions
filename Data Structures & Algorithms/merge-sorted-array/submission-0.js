class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let a = m - 1;
        let b = n - 1;
        for(let i= nums1.length -1; i>=0; i--) {
            let first = a >= 0 ? nums1[a] : -Infinity;
            let second = b >= 0 ? nums2[b] : -Infinity;
            if(first > second) {
                nums1[i] = first;
                a--;
            } else {
                nums1[i] = second;
                b--;  
            }

        }
    }
}
