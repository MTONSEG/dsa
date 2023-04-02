class List {
    constructor() {
        this.storage = [];
        this.getStorage = () => this.storage;
    }
    insertRear(num) {
        this.storage.push(num);
    }
    insertFront(num) {
        console.log(this.getTime());
        this.storage.unshift(num);
        console.log(this.getTime());
    }
    insertCenter(num, index) {
        console.log(this.getTime());
        let centerIndex = Math.floor(this.storage.length / 2);
        if (index) {
            this.storage.splice(index, 1, num);
        }
        else {
            this.storage.splice(centerIndex, 1, num);
        }
        console.log(this.getTime());
    }
    delRear() {
        console.log(this.getTime());
        this.storage.pop();
        console.log(this.getTime());
    }
    delFront() {
        console.log(this.getTime());
        this.storage.splice(0, 1);
        console.log(this.getTime());
    }
    delCenter() {
        console.log(this.getTime());
        let index = Math.floor(this.storage.length / 2);
        if (index > 0) {
            this.storage.splice(index, 1);
        }
        console.log(this.getTime());
    }
    getFront() {
        console.log(this.getTime());
        return this.storage[0];
    }
    getRear() {
        return this.storage[this.storage.length - 1];
    }
    getCenter() {
        let index = Math.floor(this.storage.length / 2);
        return this.storage[index];
    }
    fill(amount) {
        console.log(this.getTime());
        for (let i = 1; i <= amount; i++) {
            this.insertRear(i);
        }
        console.log(this.getTime());
    }
    getTime() {
        let date = new Date();
        return `${date.getMinutes()}:${date.getSeconds()}`;
    }
}
class NodeItem {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
        this.getData = () => this.data;
        this.setNext = (elem) => { this.next = elem; };
        this.getNext = () => this.next;
    }
}
class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
        this.length = 0;
        this.getLength = () => this.length;
    }
    append(data) {
        const node = new NodeItem(data);
        if (this.tail)
            this.tail.setNext(node);
        this.tail = node;
        if (!this.head)
            this.head = node;
        this.length++;
        console.log('Complete!');
    }
    prepend(data) {
        console.log(this.getTime());
        const node = new NodeItem(data, this.head);
        this.head = node;
        if (!this.tail)
            this.tail = node;
        this.length++;
        console.log(this.getTime());
    }
    insertAfter(data, after) {
        console.log(this.getTime());
        const found = this.find(after);
        if (!found)
            console.log('This elem is not defined');
        else {
            found.setNext(new NodeItem(data, found.getNext()));
        }
        this.length++;
        console.log(this.getTime());
    }
    remove(data) {
        console.log(this.getTime());
        if (!this.head)
            console.log('This list is empty');
        else {
            if (this.head.getData() === data) {
                let next = this.head.getNext();
                this.head.setNext(null);
                this.head = next;
                this.length--;
                console.log(`Removed is - ${this.head.getData()}`);
            }
            let length = this.length;
            let current = this.head;
            while (current.getNext()) {
                let nextEl = current.getNext();
                if (nextEl.getData() === data) {
                    current.setNext(nextEl.getNext());
                    this.length--;
                }
                current = nextEl;
                if (this.length !== length)
                    console.log(`Removed - ${nextEl.getData()}`);
            }
        }
        console.log(this.getTime());
    }
    find(data) {
        if (!this.head)
            console.log('This list is empty');
        else {
            let current = this.head;
            let count = 0;
            while (current) {
                if (data === current.getData()) {
                    return current;
                }
                current = current.getNext();
            }
        }
    }
    toArray() {
        if (!this.head)
            console.log('This list is empty');
        else {
            let list = [];
            let current = this.head;
            while (current) {
                list.push(current);
                current = current.getNext();
            }
            return list;
        }
    }
    getTime() {
        let date = new Date();
        return `${date.getMinutes()}:${date.getSeconds()}`;
    }
}
const list = new List();
const linkedList = new LinkedList();
list.fill(10000000);
console.log(list.getStorage());
list.insertFront(45);
console.log(list.getStorage());
list.insertCenter(45);
console.log(list.getStorage());
//# sourceMappingURL=app.js.map