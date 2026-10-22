class TimeMap {
    constructor() {
        this.map = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.map.has(key)) {
            this.map.set(key, []);
        }
        this.map.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.map.get(key);
        let res = '';
        if(!values || values[0][0] > timestamp) {
            return res;
        }
        let l = 0;
        let r = values.length - 1;
    
        while(l <= r) {
            let m = Math.floor((l+r)/2);
            if(values[m][0] <= timestamp) {
                l = m + 1;
                res = values[m][1];
            } else {
                r = m - 1;
            }
        }
        return res;
    }
}
