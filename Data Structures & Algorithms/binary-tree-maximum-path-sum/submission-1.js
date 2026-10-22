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
     * @return {number}
     */
    maxPathSum(root) {
        let maxSum = -Infinity;
        const dfs = (node)=>{
            if(!node) {
                return 0;
            }
            let leftPathSum = Math.max(dfs(node.left), 0);
            let rightPathSum = Math.max(dfs(node.right), 0);
            let currentSum = node.val + leftPathSum + rightPathSum;
            maxSum = Math.max(maxSum, currentSum);
            return node.val + Math.max(leftPathSum, rightPathSum);
        }
        dfs(root);
        return maxSum;
    }
}
