class HashMap {
    constructor() {
        this.arr = [];
    }
    set(key, value) {
        this.arr[this.generateHash(key)] = [key, value];
        return this;
    }
    get(key) {
        console.log(this.arr[this.generateHash(key)]);
        return this.arr[this.generateHash(key)];
    }
    generateHash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash;
    }
    print() {
        console.table(this.arr);
    }
}
const hash = new HashMap();
hash.set("key1", "value1");
hash.set("key2", "value2");
hash.set("key3", "value3");
hash.print();
//# sourceMappingURL=app%20copy.js.map