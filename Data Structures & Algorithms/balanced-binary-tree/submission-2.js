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
                return 0;
            }
            const rightHeight = dfs(node.right);
            if(rightHeight === -1) {
                return -1;
            }
            const leftheight = dfs(node.left);
               if(leftheight === -1) {
                return -1;
            }
            if(Math.abs(rightHeight - leftheight) > 1){
                return -1
            }
            return  Math.max(rightHeight, leftheight) + 1
            
        }
        return dfs(root) !== -1;
    }
}
