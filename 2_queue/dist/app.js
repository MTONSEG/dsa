let persons = [
    {
        id: 1,
        name: 'John',
        lastName: 'Smith'
    },
    {
        id: 2,
        name: 'Oliver',
        lastName: 'Jake'
    },
    {
        id: 3,
        name: 'Jack',
        lastName: 'Connor'
    },
    {
        id: 4,
        name: 'Harry',
        lastName: 'Callum'
    },
    {
        id: 5,
        name: 'Jacob',
        lastName: 'Kyle'
    },
    {
        id: 6,
        name: 'Thomas',
        lastName: 'Rhys'
    },
];
let alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
class Queue {
    constructor(maxPersons) {
        this.maxPersons = maxPersons;
        this.peak = () => (this.front >= 0) ? this.queue[this.front] : 'This queue is empty';
        this.isFull = () => this.rear == this.maxPersons - 1;
        this.isEmpty = () => this.front == -1;
        this.queue = [];
        this.front = -1;
        this.rear = -1;
    }
    ;
    enqueue(person) {
        if (this.isFull()) {
            console.log('This queue is full');
        }
        else {
            if (this.front = -1)
                this.front = 0;
            this.queue.push(person);
            this.rear++;
            console.log(this.queue);
        }
    }
    dequeue() {
        if (this.isEmpty())
            console.log('This queue is empty');
        else {
            this.queue.splice(0, 1);
            this.rear--;
            if (this.rear == -1)
                this.front = -1;
            console.log(this.queue);
        }
    }
}
let queue = new Queue(5);
// queue.dequeue();
// console.log(queue.peak());
// for (let person of persons) queue.enqueue(person);
// console.log(queue.peak());
// queue.dequeue();
// console.log(queue.peak());
// queue.dequeue();
// console.log(queue.peak());
// queue.dequeue();
// console.log(queue.peak());
// queue.dequeue();
// console.log(queue.peak());
// queue.dequeue();
// console.log(queue.peak());
// queue.enqueue(persons[3]);
// console.log(queue.peak());
// queue.enqueue(persons[5]);
// console.log(queue.peak());
// queue.dequeue();
// console.log(queue.peak());
// queue.dequeue();
// console.log(queue.peak());
// queue.dequeue();
// console.log(queue.peak());
// queue.dequeue();
// console.log(queue.peak());
class CircularQueue {
    constructor(size) {
        this.size = size;
        this.storage = [];
        this.front = -1;
        this.rear = -1;
        this.getFront = () => (this.isEmpty()) ? 'This queue is empty' : this.storage[this.front];
        this.getStorage = () => this.storage;
        this.restartValues = () => {
            this.front = -1;
            this.rear = -1;
        };
        this.isFull = () => this.front == 0 && this.rear == this.size - 1;
        this.isEmpty = () => this.front == -1;
    }
    ;
    enqueue(elem) {
        if (this.isFull())
            console.log('This queue is full');
        else {
            if (this.rear == this.size - 1)
                this.rear = -1;
            if (this.front == -1)
                this.front = 0;
            this.rear = (this.rear + 1) % this.size;
            this.storage[this.rear] = elem;
            console.log(this.getStorage());
        }
    }
    dequeue() {
        if (this.isEmpty())
            console.log('This queue is empty');
        else {
            let elem = this.storage[this.front];
            this.storage[this.front] = null;
            if (this.front == this.rear)
                this.restartValues();
            else {
                this.front = (this.front + 1) % this.size;
            }
            console.log(this.getStorage());
            return elem;
        }
    }
    clear() {
        this.storage = [];
        this.front = -1;
        this.rear = -1;
    }
}
let circularQueue = new CircularQueue(5);
for (let item of alphabet)
    circularQueue.enqueue(item);
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.enqueue('A');
circularQueue.enqueue('B');
circularQueue.enqueue('C');
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.enqueue('A');
circularQueue.enqueue('B');
circularQueue.enqueue('C');
circularQueue.enqueue('D');
class PriorityQueue extends Queue {
    enqueue(person) {
        let data = this.queue;
        if (this.isFull()) {
            console.log('This queue is full');
        }
        else {
            if (data.length > 0) {
                this.handleEnqueue(person, data);
            }
            else {
                if (this.front = -1) {
                    this.front = 0;
                }
                data.push(person);
            }
            this.rear++;
            console.log(data);
        }
    }
    handleEnqueue(person, data) {
        for (let i = 0; i < data.length; i++) {
            if (person.id >= data[i].id) {
                if (data[i + 1] == undefined) {
                    data.push(person);
                    break;
                }
                else
                    continue;
            }
            else {
                data.splice(i, 0, person);
                break;
            }
        }
    }
}
let priorityQueue = new PriorityQueue(5);
priorityQueue.enqueue(persons[0]);
priorityQueue.enqueue(persons[1]);
priorityQueue.enqueue(persons[0]);
priorityQueue.enqueue(persons[3]);
priorityQueue.enqueue(persons[4]);
priorityQueue.enqueue(persons[2]);
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();
//# sourceMappingURL=app.js.map