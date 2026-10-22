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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = {
            val: 0,
            next: head,
        };
        let lIndex = 1;
        let rIndex = 1;
        let left = dummy;
        let right = dummy;
        while(right) {
            right = right.next;
            rIndex++;
            if(rIndex - lIndex -1 > n) {
                left = left.next;
                lIndex++;
            }
        }
        left.next = left.next.next;


        return dummy.next;
    }
}
