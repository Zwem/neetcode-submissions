/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        const dommyNode = new ListNode(-1, head);
        let current = head;
        let prev  = dommyNode;
        while(current) {
            if(current.val === val) {
                prev.next = current.next;
                current = prev;
            }
            prev = current;
            current = current.next;
        }


        return dommyNode.next;
    }
}
