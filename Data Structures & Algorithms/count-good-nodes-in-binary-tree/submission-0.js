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
    goodNodes(root) {
        let count = 0;
        const dfs = (node, maxValue)=>{
            if(!node) {
                return;
            }
            if(node.val >= maxValue) {
                count++;
            }
            const nextMax = Math.max(maxValue, node.val);
            dfs(node.left, nextMax);
            dfs(node.right, nextMax);
        }

        dfs(root, -Infinity);
        return count; 
    }
}
