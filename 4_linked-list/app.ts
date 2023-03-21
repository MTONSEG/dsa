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

	remove(data: T) {
		if (!this.head) console.log('This list is empty');
		else {
			let current: NodeItem<T> = this.head;

			while (this.head && this.head.getData() === data) {
				this.head = this.head.getNext();
			}

			while (current.getNext()) {

				if (current.getNext().getData() === data) {
					current.getNext().setNext(current.getNext().getNext());
				} else {
					current = current.getNext()
				}
			}

			this.length--;
		}
	}

	find(data: T): NodeItem<T> {
		if (!this.head) console.log('This list is empty');
		else {
			let current: NodeItem<T> = this.head;

			while (current) {

				if (data === current.getData()) {
					return current;
				}

				current = current.getNext();
			}
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