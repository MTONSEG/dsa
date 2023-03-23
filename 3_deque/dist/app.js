// class Deque {
// 	private storage: string[];
// 	private front: number;
// 	private rear: number;
// 	constructor(private size: number) {
// 		this.storage = [];
// 		this.front = -1;
// 		this.rear = 0;
// 	}
// 	insertFront(elem: string): void {
// 		if (this.isFull()) console.log('This storage is full');
// 		else {
// 			if (this.front == -1) {
// 				this.front = 0;
// 				this.rear = 0;
// 			}
// 			if (this.front == 0) this.front = this.size - 1;
// 			else this.front--;
// 			this.storage[this.front] = elem;
// 			console.log(this.getStorage())
// 		}
// 	}
// 	insertRear(elem: string): void {
// 		if (this.isFull()) console.log('This storage is full');
// 		else {
// 			if (this.front == -1) {
// 				this.front = 0;
// 				this.rear = 0;
// 			}
// 			if (this.rear == this.size - 1) this.rear = 0;
// 			else this.rear++;
// 			this.storage[this.rear] = elem;
// 			console.log(this.getStorage())
// 		}
// 	}
// 	getStorage = (): string[] => this.storage;
// 	private isEmpty = (): boolean => this.front == -1;
// 	private isFull = (): boolean =>
// 		(this.front == 0 && this.rear == this.size - 1) || (this.front == this.rear + 1);
// 	private checkValue(elem: number): void {
// 		if (this.front == -1) {
// 			this.front = 0;
// 			this.rear = 0;
// 		}
// 	}
// }
// let deque = new Deque(5);
// deque.insertFront('A');
// deque.insertFront('B');
// deque.insertRear('C');
// deque.insertRear('C');
// deque.insertFront('D');
// deque.insertFront('E');
// deque.insertFront('F');
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
            this.length--;
            if (this.head) {
                console.log(this.toArray());
                removed.setNext(null);
                return removed;
            }
        }
    }
    removeTail() {
        if (!this.head)
            console.log('This is list empty');
        else {
            let removed = this.tail;
            this.handlerRemoveTail();
            this.length--;
            if (this.tail) {
                console.log(this.toArray());
                removed.setPrev(null);
                return removed;
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
    toString() {
        if (!this.head)
            console.log('This list is empty');
        else {
            let list = [];
            let current = this.head;
            while (current) {
                list.push(current.getData());
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
class Dequeue {
    constructor(size) {
        this.size = size;
        this.getData = () => this.storage.toString();
        this.getSize = () => this.storage.getLength();
        this.isFull = () => this.size == this.storage.getLength();
        this.isEmpty = () => this.storage.getLength() <= 0;
        this.storage = new DoubleLinkedList();
    }
    insertFront(data) {
        if (this.isFull())
            console.log('This dequeue is full');
        else {
            this.storage.prepend(data);
        }
    }
    insertRear(data) {
        if (this.isFull())
            console.log('This dequeue is full');
        else {
            this.storage.append(data);
        }
    }
    removeFront() {
        if (this.isEmpty())
            console.log('This queue is empty');
        else {
            this.storage.removeHead();
        }
    }
    removeRear() {
        if (this.isEmpty())
            console.log('This queue is empty');
        else {
            this.storage.removeTail();
        }
    }
}
let dequeue = new Dequeue(5);
dequeue.insertFront(20);
dequeue.insertRear(30);
dequeue.insertFront(10);
dequeue.insertFront(0);
dequeue.insertRear(40);
dequeue.insertRear(50);
console.log(dequeue.getData());
dequeue.removeFront();
dequeue.removeRear();
console.log(dequeue.getData());
dequeue.removeFront();
dequeue.removeRear();
dequeue.removeFront();
console.log(dequeue.getSize());
dequeue.removeRear();
console.log(dequeue.getSize());
dequeue.removeFront();
console.log(dequeue.getSize());
dequeue.removeRear();
console.log(dequeue.getSize());
dequeue.removeFront();
console.log(dequeue.getSize());
dequeue.removeRear();
//# sourceMappingURL=app.js.map