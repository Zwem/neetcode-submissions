// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let domyNode = new Node(0);
        let prev = domyNode;
        let map = new Map();
        map.set(null, null);
        let current = head;
        while(current) {
            let newNode = null
            if(map.has(current)) {
                newNode = map.get(current);
            } else {
                newNode = new Node(current.val);
                map.set(current, newNode);
            }
            let random = null;
            if(map.has(current.random)) {
                random = map.get(current.random);

            } else {
                random = new Node(current.random.val);
                map.set(current.random, random);

            }
            newNode.random = random;
            prev.next = newNode;
            prev = prev.next;
            current = current.next;
        }

        return domyNode.next;
    }
}
