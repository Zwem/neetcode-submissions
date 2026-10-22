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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
    let extra = 0;
    let dummy = new ListNode();
    let curr = dummy;

    while(l1 || l2 || extra) {
        let val = extra + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        extra = Math.floor(val/10);
        val = val % 10;

        curr.next = new ListNode(val);
        curr = curr.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }

    return dummy.next;
    }
}
