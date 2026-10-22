/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    constructor(){
        this.visited = new Map();
    }
    cloneGraph(node) {
        if(!node) {
            return null;
        }
        if(this.visited.has(node)){
            return this.visited.get(node)
        }
        
        const newNode = new Node(node.val, []);
        this.visited.set(node, newNode);

        for(const neighbor of node.neighbors) {
            newNode.neighbors.push(this.cloneGraph(neighbor));
        }
        return newNode;
    }
}
