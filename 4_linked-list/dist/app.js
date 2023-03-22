// Однонаправленный список
const SinglyLinkedList = () => {
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
    const list = new LinkedList();
    list.append(10);
    list.append(20);
    list.append(40);
    list.append(50);
    list.prepend(0);
    list.insertAfter(30, 20);
    let arr = list.toArray();
    console.log(arr);
    console.log(list.getLength());
    list.remove(50);
    console.log(list.getLength());
    arr = list.toArray();
    console.log(arr);
};
// SinglyLinkedList();
const DoubleLinkedList = () => {
    class DoubleNodeItem {
        constructor(data, next = null, previous = null) {
            this.data = data;
            this.next = next;
            this.previous = previous;
            this.getData = () => this.data;
            this.setNext = (elem) => { this.next = elem; };
            this.getNext = () => this.next;
            this.setPrev = (elem) => { this.previous = elem; };
            this.getPrev = () => this.previous;
        }
    }
    class DoubleLinkedList {
        constructor(head = null, tail = null) {
            this.head = head;
            this.tail = tail;
            this.length = 0;
            this.getLength = () => this.length;
        }
        append(data) {
            const node = new DoubleNodeItem(data);
            if (!this.tail) {
                this.tail = node;
            }
            else {
                node.setPrev(this.tail);
                this.tail.setNext(node);
                this.tail = node;
            }
            if (!this.head)
                this.head = node;
            this.length++;
            console.log(this.toArray());
        }
        prepend(data) {
            const node = new DoubleNodeItem(data, this.head);
            if (!this.head)
                this.head = node;
            this.head.setPrev(node);
            this.head = node;
            if (!this.tail)
                this.tail = node;
            this.length++;
            console.log(this.toArray());
        }
        insertAfter(data, after) {
            const found = this.find(after);
            if (!found)
                console.log('This elem is not defined');
            else {
                found.setNext(new DoubleNodeItem(data, found.getNext()));
            }
            this.length++;
            console.log(this.toArray());
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
                        nextEl.setPrev(current);
                        this.length--;
                    }
                    current = nextEl;
                    if (this.length !== length)
                        console.log(`Removed - ${nextEl.getData()}`);
                }
            }
            console.log(this.toArray());
        }
        removeHead() {
            if (!this.head)
                console.log('This is list empty');
            else {
                let removed = this.head;
                this.handlerRemoveHead();
                removed.setNext(null);
                this.length--;
                console.log(this.toArray());
                return removed;
            }
        }
        removeTail() {
            if (!this.head)
                console.log('This is list empty');
            else {
                let removed = this.tail;
                this.handlerRemoveTail();
                removed.setPrev(null);
                this.length--;
                console.log(this.toArray());
                return removed;
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
        handlerRemoveHead() {
            if (this.head == this.tail)
                this.head = this.tail = null;
            else {
                this.head = this.head.getNext();
                this.head.setPrev(null);
            }
        }
        handlerRemoveTail() {
            if (this.head == this.tail)
                this.head = this.tail = null;
            else {
                this.tail = this.tail.getPrev();
                this.tail.setNext(null);
            }
        }
    }
    const list = new DoubleLinkedList();
    list.append(10);
    list.append(20);
    list.append(40);
    list.append(50);
    list.prepend(0);
    list.insertAfter(30, 20);
    console.log(list.getLength());
    list.remove(50);
    console.log(list.getLength());
};
DoubleLinkedList();
//# sourceMappingURL=app.js.map