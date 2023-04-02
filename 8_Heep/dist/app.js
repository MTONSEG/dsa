class Heep {
    constructor(num) {
        this.storage = [];
        this.sorted = [];
        this.getStorage = () => this.storage;
        this.addSort = (num) => { this.sorted.push(num); };
        this.parentIndex = (index) => Math.floor((index - 1) / 2);
        this.leftChildIndex = (index) => Math.floor((index * 2) + 1);
        this.rightChildIndex = (index) => Math.floor((index * 2) + 2);
        this.fill(num);
    }
    insert(value) {
        this.storage.push(value);
        let currentIndex = this.storage.length - 1;
        let parentIndex = this.parentIndex(currentIndex);
        while (this.storage[currentIndex] && this.storage[parentIndex] > this.storage[currentIndex]) {
            this.swap(this.storage, currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parentIndex(currentIndex);
        }
    }
    remove() {
        if (this.storage.length > 1) {
            let index = 0;
            let leftChildIndex = this.leftChildIndex(index);
            let rightChildIndex = this.rightChildIndex(index);
            let maxChildIndex = leftChildIndex;
            let value = this.storage[index];
            this.storage[index] = this.storage.pop();
            while (this.storage[leftChildIndex] && this.storage.length - 1 > index) {
                if (this.storage[rightChildIndex] && this.storage[rightChildIndex] < this.storage[maxChildIndex]) {
                    maxChildIndex = rightChildIndex;
                }
                ;
                if (this.storage[index] > this.storage[maxChildIndex]) {
                    this.swap(this.storage, maxChildIndex, index);
                }
                ;
                index = maxChildIndex;
                leftChildIndex = this.leftChildIndex(index);
                maxChildIndex = leftChildIndex;
            }
            return value;
        }
        else {
            return this.storage.pop();
        }
    }
    sort() {
        while (this.storage.length > 0) {
            this.sorted.push(this.remove());
        }
    }
    fill(num) {
        for (let i = 0; i < num; i++) {
            let random = Math.floor(Math.random() * ((num * 2) - 1) + 1);
            this.insert(random);
        }
    }
    swap(arr, index1, index2) {
        let tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
    }
}
let heepMin = new Heep(4);
heepMin.sort();
console.log('End');
//# sourceMappingURL=app.js.map