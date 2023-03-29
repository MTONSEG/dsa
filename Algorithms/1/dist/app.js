class SearchIndex {
    constructor() {
        this.storage = [];
        this.size = 0;
    }
    input(size) {
        this.size = size;
        for (let i = 0; i < size; i++) {
            let random = this.createRandom(1, size * 2);
            this.storage.push(random);
        }
    }
    search(num) {
        return this.storage.indexOf(num);
    }
    search2(num) {
        let count = -1;
        for (let i = 0; i < this.size; i++) {
            count++;
            if (this.storage[i] === num)
                return count;
        }
        return false;
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
console.log(searchIndex.search(10));
console.log(searchIndex.search2(10));
console.log(searchIndex);
//# sourceMappingURL=app.js.map