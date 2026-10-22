class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const array = Array.from({ length: position.length});
        for(let i=0;i<position.length; i++) {
            array[i] = {
                position: position[i],
                speed: speed[i],
            }
        }
        array.sort((a, b)=>a.position - b.position);
        const stack = [];
        for(let i=array.length-1; i>=0; i-- ) {
            const time  = (target - array[i].position)/array[i].speed;
            if(stack.length > 0 && time <= stack[stack.length -1]) {
                continue;
            }
            stack.push(time);

        }
        return stack.length;
    }
}
