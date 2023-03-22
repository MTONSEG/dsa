
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

SinglyLinkedList();


