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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const isSametree = (first, second)=>{
            if(!first && !second) { 
                return true;
            }
            if(!first || !second) {
                return false;
            }
            return first.val === second.val && isSametree(first.left, second.left) && isSametree(first.right, second.right);
        }
        if (!root) return false;
        return isSametree(root, subRoot) || this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);

    }
}