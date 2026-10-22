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
     * @return {boolean}
     */
    isBalanced(root) {
        const dfs = (node) => {
            if(!node) {
                return {
                    isBalanced: true,
                    maxHeight: 0,
                }
            }
            const rightNode = dfs(node.right);
            const leftNode = dfs(node.left);
            const isBalanced = leftNode.isBalanced && rightNode.isBalanced && Math.abs(rightNode.maxHeight - leftNode.maxHeight) <= 1;
            return  {
                    isBalanced,
                    maxHeight: Math.max(rightNode.maxHeight, leftNode.maxHeight) + 1,
            }
            
        }
        const { isBalanced } = dfs(root);
        return isBalanced
    }
}
