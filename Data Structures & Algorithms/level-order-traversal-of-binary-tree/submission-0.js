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
     * @return {number[][]}
     */
    levelOrder(root) {
        let queue = [];
        let res = []
        if(root){
          queue.push(root);
        }
        while(queue.length > 0) {
            const lvlLength = queue.length;
            let lvlArr = [];
            for(let i=0;i<lvlLength;i++) {
                let current = queue.shift();
                lvlArr.push(current.val);
                if(current.left) {
                    queue.push(current.left);
                }
                if(current.right) {
                    queue.push(current.right);
                }
            }
            res.push(lvlArr);
        }

        return res;
    }
}
