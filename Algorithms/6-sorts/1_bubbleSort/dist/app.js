class BubbleSort {
    constructor() {
        this.store = [];
        this.fill();
    }
    get Store() {
        return this.store;
    }
    sort(type) {
        if (type != 'up' && type != 'down') {
            throw new Error('invalid type');
        }
        ;
        for (let i = 0; i < this.store.length; i++) {
            for (let k = 0; k < this.store.length - 1; k++) {
                let first = this.store[k];
                let second = this.store[k + 1];
                if (type == 'up') {
                    if (first < second) {
                        this.swap(k, k + 1);
                        // this.store[k] = second;
                        // this.store[k + 1] = first;
                    }
                }
                else {
                    if (first > second) {
                        this.swap(k, k + 1);
                        // this.store[k] = second;
                        // this.store[k + 1] = first;
                    }
                }
            }
        }
        return this.store;
    }
    swap(fistIndex, secondIndex) {
        let tmp = this.store[fistIndex];
        this.store[fistIndex] = this.store[secondIndex];
        this.store[secondIndex] = tmp;
    }
    fill() {
        for (let i = 0; i < 10; i++) {
            let random = Math.floor(Math.random() * (100 - 1) + 1);
            this.store.push(random);
        }
    }
}
let bubble = new BubbleSort();
let test = bubble.Store;
bubble.sort('up');
console.log('End');
//# sourceMappingURL=app.js.map