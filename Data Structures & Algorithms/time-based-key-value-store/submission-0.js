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
        if(!values || values[0][0] > timestamp) {
            return '';
        }
        let l = 0;
        let r = values.length - 1;
        while(l <= r) {
            let m = Math.floor((l+r)/2);
            if(values[m][0] > timestamp) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return values[r][1];
    }
}
