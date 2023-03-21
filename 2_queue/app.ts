type Person = {
	id: number,
	name: string,
	lastName: string
}

let persons: Person[] = [
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
]
let alphabet: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];

class Queue {
	private queue: Person[] = [];
	private front: number = -1;
	private rear: number = -1;

	constructor(private maxPersons: number) { };

	peak = (): Person | string => (this.front >= 0) ? this.queue[this.front] : 'This queue is empty';

	enqueue(person: Person): void {
		if (this.isFull()) {
			console.log('This queue is full');
		} else {
			if (this.front = -1) this.front = 0;

			this.queue.push(person);

			this.rear++;

			console.log(this.queue);
		}
	}

	dequeue(): void {
		if (this.isEmpty()) console.log('This queue is empty');
		else {
			this.queue.splice(0, 1);

			this.rear--;

			if (this.rear == -1) this.front = -1;

			console.log(this.queue);
		}

	}

	private isFull = (): boolean => this.rear == this.maxPersons - 1;

	private isEmpty = (): boolean => this.front == -1;
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
	private storage: string[] = [];
	private front: number = -1;
	private rear: number = -1;

	constructor(private size: number) { };

	enqueue(elem: string): void {
		if (this.isFull()) console.log('This queue is full');
		else {
			if (this.rear == this.size - 1) this.rear = -1;

			if (this.front == -1) this.front = 0;

			this.rear = (this.rear + 1) % this.size;

			this.storage[this.rear] = elem;
			
			console.log(this.getStorage());
		}
	}

	dequeue(): string {
		if (this.isEmpty()) console.log('This queue is empty');
		else {
			let elem: string = this.storage[this.front];

			this.storage[this.front] = null;

			if (this.front == this.rear) this.restartValues();
			else {
				this.front = (this.front + 1) % this.size;
			}

			console.log(this.getStorage());

			return elem;
		}

	}

	clear(): void {
		this.storage = [];
		this.front = -1;
		this.rear = -1;
	}

	getFront = (): string => (this.isEmpty()) ? 'This queue is empty' : this.storage[this.front];

	getStorage = (): string[] => this.storage;

	private restartValues = (): void => {
		this.front = -1;
		this.rear = -1;
	}

	private isFull = (): boolean => this.front == 0 && this.rear == this.size - 1;

	private isEmpty = (): boolean => this.front == -1;
}

let circularQueue = new CircularQueue(5);

for (let item of alphabet) circularQueue.enqueue(item);

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