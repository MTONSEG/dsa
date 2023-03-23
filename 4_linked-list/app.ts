
// Однонаправленный список
const SinglyLinkedList = (): void => {

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
		}

		prepend(data: T): void {
			const node = new NodeItem(data, this.head);

			this.head = node;

			if (!this.tail) this.tail = node;

			this.length++;
		}

		insertAfter(data: T, after: T): void {
			const found = this.find(after);

			if (!found) console.log('This elem is not defined');
			else {
				found.setNext(new NodeItem(data, found.getNext()));
			}

			this.length++;
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

	const list = new LinkedList();

	list.append(10);
	list.append(20);
	list.append(40);
	list.append(50);
	list.prepend(0);
	list.insertAfter(30, 20);

	let arr = list.toArray();
	console.log(arr);

	console.log(list.getLength())

	list.remove(50);

	console.log(list.getLength())

	arr = list.toArray();
	console.log(arr);
}

// SinglyLinkedList();


const DoubleLinkedList = (): void => {

	class DoubleNodeItem<T> {
		constructor(
			private data: T,
			private next: DoubleNodeItem<T> | null = null,
			private previous: DoubleNodeItem<T> | null = null,
		) { }

		getData = (): T => this.data;

		setNext = (elem: DoubleNodeItem<T>) => { this.next = elem };
		getNext = (): DoubleNodeItem<T> => this.next;

		setPrev = (elem: DoubleNodeItem<T>) => { this.previous = elem };
		getPrev = (): DoubleNodeItem<T> => this.previous;
	}

	class DoubleLinkedList<T> {
		private length: number = 0;

		constructor(
			private head: DoubleNodeItem<T> | null = null,
			private tail: DoubleNodeItem<T> | null = null
		) { }

		append(data: T): void {
			const node: DoubleNodeItem<T> = new DoubleNodeItem(data);

			if (!this.tail) {
				this.tail = node;
			} else {
				node.setPrev(this.tail);

				this.tail.setNext(node);

				this.tail = node;
			}

			if (!this.head) this.head = node;

			this.length++;

			console.log(this.toArray());
		}

		prepend(data: T): void {
			const node = new DoubleNodeItem(data, this.head);

			if (!this.head) this.head = node;

			this.head.setPrev(node);

			this.head = node;

			if (!this.tail) this.tail = node;

			this.length++;

			console.log(this.toArray());
		}

		insertAfter(data: T, after: T): void {
			const found = this.find(after);

			if (!found) console.log('This elem is not defined');
			else {
				found.setNext(new DoubleNodeItem(data, found.getNext()));
			}

			this.length++;

			console.log(this.toArray());
		}

		remove(data: T): void {
			if (!this.head) console.log('This list is empty');
			else {
				if (this.head.getData() === data) {
					let next: DoubleNodeItem<T> = this.head.getNext();

					this.head.setNext(null);

					this.head = next;

					this.length--;

					console.log(`Removed is - ${this.head.getData()}`);
				}

				let length: number = this.length;
				let current: DoubleNodeItem<T> = this.head;

				while (current.getNext()) {
					let nextEl: DoubleNodeItem<T> = current.getNext();

					if (nextEl.getData() === data) {
						current.setNext(nextEl.getNext());

						nextEl.setPrev(current);

						this.length--;
					}

					current = nextEl;

					if (this.length !== length) console.log(`Removed - ${nextEl.getData()}`);
				}
			}

			console.log(this.toArray());
		}

		removeHead(): DoubleNodeItem<T> {
			if (!this.head) console.log('This is list empty');
			else {
				let removed: DoubleNodeItem<T> = this.head;

				this.handlerRemoveHead();

				removed.setNext(null);

				this.length--;

				console.log(this.toArray());

				return removed;
			}
		}

		removeTail(): DoubleNodeItem<T> {
			if (!this.head) console.log('This is list empty');
			else {
				let removed: DoubleNodeItem<T> = this.tail;

				this.handlerRemoveTail();

				removed.setPrev(null);

				this.length--;

				console.log(this.toArray());

				return removed;
			}
		}

		find(data: T): DoubleNodeItem<T> {
			if (!this.head) console.log('This list is empty');
			else {
				let current: DoubleNodeItem<T> = this.head;
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

		toArray(): DoubleNodeItem<T>[] {
			if (!this.head) console.log('This list is empty');
			else {
				let list: DoubleNodeItem<T>[] = [];
				let current: DoubleNodeItem<T> | null = this.head;

				while (current) {
					list.push(current);

					current = current.getNext();
				}

				return list;
			}
		}

		getLength = (): number => this.length;

		private handlerRemoveHead(): void {
			if (this.head == this.tail) this.head = this.tail = null;
			else {
				this.head = this.head.getNext();
				this.head.setPrev(null);
			}
		}
		private handlerRemoveTail(): void {
			if (this.head == this.tail) this.head = this.tail = null;
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

	console.log(list.getLength())

	list.remove(50);

	console.log(list.getLength())
}

DoubleLinkedList();



