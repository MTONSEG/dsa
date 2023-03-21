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
            let current = this.head;
            while (this.head && this.head.getData() === data) {
                this.head = this.head.getNext();
            }
            while (current.getNext()) {
                if (current.getNext().getData() === data) {
                    current.getNext().setNext(current.getNext().getNext());
                }
                else {
                    current = current.getNext();
                }
            }
            this.length--;
        }
    }
    find(data) {
        if (!this.head)
            console.log('This list is empty');
        else {
            let current = this.head;
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
}
const list = new LinkedList();
list.append('Hello, World');
list.append('Second');
list.prepend('Third');
list.append(24);
let arr = list.toArray();
console.log(arr);
list.remove(24);
console.log(list.toArray());
//# sourceMappingURL=app.js.map