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
     * @return {boolean}
     */
    hasCycle(head) {
        let current = head;
        let fast = head;
        while(fast && fast.next) {
            current = current.next;
            fast = fast.next.next 
            if(fast === current){
                return true;
            }           
        }
        return false;


    }
}
