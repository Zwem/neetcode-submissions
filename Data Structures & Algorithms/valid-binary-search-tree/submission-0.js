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
    isValidBST(root) {
        const dfs = (node, minValue, maxValue)=>{
            if(!node) {
                return true;
            }
            if(node.val <= minValue || node.val >= maxValue) {
                return false;

            }
            return dfs(node.left, minValue, node.val) && dfs(node.right, node.val,  maxValue);

        }
        return dfs(root, -Infinity, Infinity);
    }
}
