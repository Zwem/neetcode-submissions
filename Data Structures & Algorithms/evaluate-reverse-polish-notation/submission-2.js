class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const set = new Set(['+', '-', '*', '/'])
        const map = {
            '+': (a,b)=>a+b,
            '-': (a,b)=>a-b,
            '*': (a,b)=>a*b,
            '/': (a,b)=>Math.trunc(a/b),
        }
        for(const tok of tokens) {
            if(map[tok] !== undefined) {
                const secondNumber = Number(stack.pop());
                const firstNumber = Number(stack.pop());
                stack.push(map[tok](firstNumber, secondNumber));


            } else {
                stack.push(tok);
            }
        }
        return stack[0];
    }
}
