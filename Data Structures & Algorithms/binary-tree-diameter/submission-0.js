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
    diameterOfBinaryTree(root) {
        let maxDiametr = 0;
        const dfs = (node)=> {
            if(!node) {
                return 0;
            }
            let currentMaxDiametr = dfs(node.left) + dfs(node.right);
            maxDiametr = Math.max(maxDiametr, currentMaxDiametr);
            return Math.max(dfs(node.left), dfs(node.right)) +1;
        }
        dfs(root);

        return maxDiametr;
    }
}
