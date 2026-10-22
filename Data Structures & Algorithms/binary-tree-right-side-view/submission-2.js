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
     * @return {number[]}
     */
    rightSideView(root) {
        const res = [];
        const dfs = (node, lvl)=>{
            if(!node) {
                return;
            }
            if(res.length === lvl) {
                res.push(node.val);
            }
            if(node.right) {
                dfs(node.right, lvl +1);
            }
            if(node.left) {
                dfs(node.left, lvl +1);
            }

        }
        dfs(root, 0);

        return res;
    }
}
