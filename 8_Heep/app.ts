class HeepMin {
	private storage: number[] = [];
	private sorted: number[] = [];

	constructor(num: number) {
		this.fill(num);
	}

	insert(value: number): void {
		this.storage.push(value);

		let currentIndex: number = this.storage.length - 1;
		let parentIndex: number = this.parentIndex(currentIndex);

		while (this.storage[currentIndex] && this.storage[parentIndex] > this.storage[currentIndex]) {
			this.swap(this.storage, currentIndex, parentIndex);
			currentIndex = parentIndex;
			parentIndex = this.parentIndex(currentIndex);
		}
	}

	remove(): number {
		if (this.storage.length > 1) {
			let index: number = 0;
			let leftChildIndex: number = this.leftChildIndex(index);
			let rightChildIndex: number = this.rightChildIndex(index);
			let maxChildIndex = leftChildIndex;

			let value: number = this.storage[index];
			this.storage[index] = this.storage.pop();

			while (this.storage[leftChildIndex] && this.storage.length - 1 > index) {
				if (this.storage[rightChildIndex] && this.storage[rightChildIndex] < this.storage[maxChildIndex]) {
					maxChildIndex = rightChildIndex
				};

				if (this.storage[index] > this.storage[maxChildIndex]) {
					this.swap(this.storage, maxChildIndex, index)
				};

				index = maxChildIndex;
				leftChildIndex = this.leftChildIndex(index);
				maxChildIndex = leftChildIndex;
			}

			return value;
		} else {
			return this.storage.pop();
		}
	}

	sort(): void {
		while (this.storage.length > 0) {
			this.sorted.push(this.remove());
		}
	}

	fill(num: number) {
		for (let i: number = 0; i < num; i++) {
			let random: number = Math.floor(Math.random() * ((num * 2) - 1) + 1);

			this.insert(random);
		}
	}

	getStorage = (): number[] => this.storage;
	addSort = (num: number): void => { this.sorted.push(num) };

	private parentIndex = (index: number): number => Math.floor((index - 1) / 2);
	private leftChildIndex = (index: number): number => Math.floor((index * 2) + 1);
	private rightChildIndex = (index: number): number => Math.floor((index * 2) + 2);

	private swap<T>(arr: T[], index1: number, index2: number) {
		let tmp: T = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = tmp;
	}
}

let heepMin = new HeepMin(7);

heepMin.sort();

console.log('End');

