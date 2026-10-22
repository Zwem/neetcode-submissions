/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let res = -1;

        const dfs = (node, count) => {
            if (!node) {
                return 0;
            }
            const leftCount = dfs(node.left, count);
            const currentCount = count + leftCount + 1;
            if (currentCount === k) {
                res = node.val;
            }
            const rightCount = dfs(node.right, currentCount);
    
            return leftCount + 1 + rightCount;
        }

        dfs(root, 0);


        return res;
    }
}
