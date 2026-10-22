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
        let queue = [];
        let lvl = 0;
        const res = [];
        if(root) {
            queue.push([root]);
        }
        while(queue[lvl] && queue[lvl].length > 0) {
            const currentLvlItems = queue[lvl];
            res.push(currentLvlItems[0].val);
            lvl++;
            queue[lvl] = [];
            for(const item of currentLvlItems) {
                if(item.right) {
                   queue[lvl].push(item.right);
                }
                if(item.left) {
                    queue[lvl].push(item.left);
                }
            }            
        }
        return res;
    }
}
