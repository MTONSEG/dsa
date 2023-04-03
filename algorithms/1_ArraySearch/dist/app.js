class SearchIndex {
    constructor() {
        this.storage = [];
        this.size = 0;
        this.counter = 0;
    }
    input(size) {
        this.size = size;
        for (let i = 0; i < 10; i++) {
            let random = this.createRandom(1, size * 2);
            this.storage.push(i + 1);
        }
    }
    search(num) {
        return this.storage.indexOf(num);
    }
    search2(num) {
        this.counter = 0;
        for (let i = 0; i < this.size; i++) {
            this.counter++;
            if (this.storage[i] === num) {
                return i;
            }
            ;
        }
        return false;
    }
    search3(num) {
        let front = 0;
        let back = this.storage.length - 1;
        this.counter = 0;
        while (front - 1 != back) {
            this.counter++;
            if (this.storage[front] === num) {
                console.log('Found: ', num);
                break;
            }
            if (this.storage[back] === num) {
                console.log('Found: ', num);
                break;
            }
            front++;
            back--;
        }
    }
    get Counter() {
        return this.counter;
    }
    createRandom(min, max) {
        let random = Math.floor(Math.random() * (max - min) + min);
        if (this.storage.includes(random)) {
            let result;
            result = this.createRandom(min, max);
            return result;
        }
        ;
        return random;
    }
}
let searchIndex = new SearchIndex();
searchIndex.input(10);
searchIndex.search(8);
console.log(searchIndex.Counter);
searchIndex.search2(8);
console.log(searchIndex.Counter);
searchIndex.search3(8);
console.log(searchIndex.Counter);
//# sourceMappingURL=app.js.map