class MinStack { 
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.min = Math.min(val, this.min);
        this.stack.push({
            val,
            min: this.min,
        });

    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        const last = this.stack[this.stack.length - 1];
        this.min = last ? last.min : Infinity;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].val
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
