class List {
	private storage: number[] = [];

	insertRear(num: number) {
		this.storage.push(num);
		console.log('Complete!');
	}

	insertFront(num: number) {
		this.storage.unshift(num);
		console.log('Complete!');
	}

	insertCenter(num: number, index?: number) {
		let centerIndex: number = Math.floor(this.storage.length / 2);

		if (index) {
			this.storage.splice(index, 1, num);
		} else {
			this.storage.splice(centerIndex, 1, num);
		}

		console.log('Complete!');
	}

	delRear(): void {
		this.storage.pop();
		console.log('Complete!');
	}

	delFront(): void {
		this.storage.splice(0, 1);
		console.log('Complete!');
	}

	delCenter(): void {
		let index: number = Math.floor(this.storage.length / 2);

		if (index > 0) {
			this.storage.splice(index, 1);
		}
		console.log('Complete!');
	}

	getFront(): number {
		return this.storage[0];
	}

	getRear(): number {
		return this.storage[this.storage.length - 1];
	}

	getCenter(): number {
		let index: number = Math.floor(this.storage.length / 2);

		return this.storage[index];
	}

	fill(amount: number) {
		for (let i: number = 1; i <= amount; i++) {
			this.insertRear(i);
		}
	}
}

class NodeItem<T> {
	constructor(
		private data: T,
		private next: NodeItem<T> | null = null
	) { }

	getData = (): T => this.data;
	setNext = (elem: NodeItem<T>) => { this.next = elem };
	getNext = (): NodeItem<T> => this.next;
}


class LinkedList<T> {
	private length: number = 0;

	constructor(
		private head: NodeItem<T> | null = null,
		private tail: NodeItem<T> | null = null
	) { }

	append(data: T): void {
		const node = new NodeItem(data);

		if (this.tail) this.tail.setNext(node);

		this.tail = node;

		if (!this.head) this.head = node;

		this.length++;
		console.log('Complete!');
	}

	prepend(data: T): void {
		const node = new NodeItem(data, this.head);

		this.head = node;

		if (!this.tail) this.tail = node;

		this.length++;
		console.log('Complete!');
	}

	insertAfter(data: T, after: T): void {
		const found = this.find(after);

		if (!found) console.log('This elem is not defined');
		else {
			found.setNext(new NodeItem(data, found.getNext()));
		}

		this.length++;
		console.log('Complete!');
	}

	remove(data: T): void {
		if (!this.head) console.log('This list is empty');
		else {
			if (this.head.getData() === data) {
				let next: NodeItem<T> = this.head.getNext();

				this.head.setNext(null);

				this.head = next;

				this.length--;

				console.log(`Removed is - ${this.head.getData()}`);
			}

			let length: number = this.length;
			let current: NodeItem<T> = this.head;

			while (current.getNext()) {
				let nextEl: NodeItem<T> = current.getNext();

				if (nextEl.getData() === data) {
					current.setNext(nextEl.getNext());

					this.length--;
				}

				current = nextEl;

				if (this.length !== length) console.log(`Removed - ${nextEl.getData()}`);
			}
		}
	}

	find(data: T): NodeItem<T> {
		if (!this.head) console.log('This list is empty');
		else {
			let current: NodeItem<T> = this.head;
			let count: number = 0;

			while (current) {

				if (data === current.getData()) {
					return current;
				}

				current = current.getNext();
			}

			// if (count === 0) console.log(`This ${data} is not defined`);
		}
	}

	toArray(): NodeItem<T>[] {
		if (!this.head) console.log('This list is empty');
		else {
			let list: NodeItem<T>[] = [];
			let current: NodeItem<T> | null = this.head;

			while (current) {
				list.push(current);

				current = current.getNext();
			}

			return list;
		}
	}

	getLength = (): number => this.length;
}

const list = new List();
const linkedList = new LinkedList();

list.fill(1000);
list.insertFront(45);
list.insertCenter(45);

console.log(list);

for (let i: number = 1; i < 1000000; i++) {
	linkedList.append(i);
}