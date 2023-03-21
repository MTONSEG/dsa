class Deque {
    constructor(size) {
        this.size = size;
        this.getStorage = () => this.storage;
        this.isEmpty = () => this.front == -1;
        this.isFull = () => (this.front == 0 && this.rear == this.size - 1) || (this.front == this.rear + 1);
        this.storage = [];
        this.front = -1;
        this.rear = 0;
    }
    insertFront(elem) {
        if (this.isFull())
            console.log('This storage is full');
        else {
            if (this.front == -1) {
                this.front = 0;
                this.rear = 0;
            }
            if (this.front == 0)
                this.front = this.size - 1;
            else
                this.front--;
            this.storage[this.front] = elem;
            console.log(this.getStorage());
        }
    }
    insertRear(elem) {
        if (this.isFull())
            console.log('This storage is full');
        else {
            if (this.front == -1) {
                this.front = 0;
                this.rear = 0;
            }
            if (this.rear == this.size - 1)
                this.rear = 0;
            else
                this.rear++;
            this.storage[this.rear] = elem;
            console.log(this.getStorage());
        }
    }
    checkValue(elem) {
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }
    }
}
let deque = new Deque(5);
deque.insertFront('A');
deque.insertFront('B');
deque.insertRear('C');
deque.insertRear('C');
deque.insertFront('D');
deque.insertFront('E');
deque.insertFront('F');
//# sourceMappingURL=app.js.map