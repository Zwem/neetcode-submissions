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
        let res = null;
        let count = 0;


        const dfs = (node) => {
            if(!node || res !== null) {
                return;
            }
            dfs(node.left);
            count++;
            if(count === k) {
                res = node.val;
            }
            dfs(node.right);
        }

        dfs(root, 0);


        return res;
    }
}
