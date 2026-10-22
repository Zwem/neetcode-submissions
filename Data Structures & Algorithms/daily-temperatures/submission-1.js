class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const results = Array.from({ length: temperatures.length }, ()=> 0);

        for(let i = temperatures.length -1;i>=0; i--) {
            while(stack.length >0 && stack[stack.length -1].val <= temperatures[i]) {
                stack.pop();
            }
            const lastInStack = stack[stack.length -1];
            results[i] = lastInStack ? lastInStack.index - i : 0;
            if(stack.length === 0 || lastInStack.val >= temperatures[i]) {
                stack.push({
                    val: temperatures[i],
                    index: i
                })
            }

        }

        return results;
    }
}
/*
[40]
*/