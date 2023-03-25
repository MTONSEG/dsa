class List {
    constructor() {
        this.storage = [];
    }
    insertRear(num) {
        this.storage.push(num);
        console.log('Complete!');
    }
    insertFront(num) {
        this.storage.unshift(num);
        console.log('Complete!');
    }
    insertCenter(num, index) {
        let centerIndex = Math.floor(this.storage.length / 2);
        if (index) {
            this.storage.splice(index, 1, num);
        }
        else {
            this.storage.splice(centerIndex, 1, num);
        }
        console.log('Complete!');
    }
    delRear() {
        this.storage.pop();
        console.log('Complete!');
    }
    delFront() {
        this.storage.splice(0, 1);
        console.log('Complete!');
    }
    delCenter() {
        let index = Math.floor(this.storage.length / 2);
        if (index > 0) {
            this.storage.splice(index, 1);
        }
        console.log('Complete!');
    }
    getFront() {
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
        for (let i = 1; i <= amount; i++) {
            this.insertRear(i);
        }
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
    }
    prepend(data) {
        const node = new NodeItem(data, this.head);
        this.head = node;
        if (!this.tail)
            this.tail = node;
        this.length++;
    }
    insertAfter(data, after) {
        const found = this.find(after);
        if (!found)
            console.log('This elem is not defined');
        else {
            found.setNext(new NodeItem(data, found.getNext()));
        }
        this.length++;
    }
    remove(data) {
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
            // if (count === 0) console.log(`This ${data} is not defined`);
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
}
const list = new List();
const linkedList = new LinkedList();
list.fill(1000);
list.insertFront(45);
list.insertCenter(45);
console.log(list);
for (let i = 1; i < 1000000; i++) {
    linkedList.append(i);
}
//# sourceMappingURL=app.js.map