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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let current  = slow.next;
        slow.next = null;
        let prev = null;

        while(current) {
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }

        let currentLeftPart = head;
        let currentRightPart = prev;

        while(currentRightPart) {
            let tempLeft = currentLeftPart.next;
            let tempRight = currentRightPart.next;

            currentLeftPart.next = currentRightPart;
            currentRightPart.next = tempLeft;

            currentLeftPart = tempLeft;
            currentRightPart = tempRight;
        }

        return head;
    }
}
