class SearchIndex {
	private storage: number[] = [];
	private size: number = 0;
	private counter: number = 0;

	input(size: number) {
		this.size = size;

		for (let i: number = 0; i < 10; i++) {
			let random: number = this.createRandom(1, size * 2);
			this.storage.push(i + 1);
		}
	}

	search(num: number): number {
		return this.storage.indexOf(num);
	}

	search2(num: number): boolean | number {
		this.counter = 0;

		for (let i: number = 0; i < this.size; i++) {
			this.counter++;

			if (this.storage[i] === num) {
				return i
			};
		}

		return false;
	}

	search3(num: number) {
		let front: number = 0;
		let back: number = this.storage.length - 1;

		this.counter = 0;

		while (front - 1 != back) {
			this.counter++;
			if (this.storage[front] === num) {
				console.log('Found: ', num);
				break;
			}

			if (this.storage[back] === num) {
				console.log('Found: ', num);
				break;
			}

			front++;
			back--;
		}
	}

	get Counter(): number {
		return this.counter;
	}

	private createRandom(min: number, max: number): number {
		let random: number = Math.floor(Math.random() * (max - min) + min);

		if (this.storage.includes(random)) {
			let result: number;

			result = this.createRandom(min, max);

			return result;
		};

		return random;
	}
}

let searchIndex = new SearchIndex();

searchIndex.input(10);
searchIndex.search(8);
console.log(searchIndex.Counter);
searchIndex.search2(8);
console.log(searchIndex.Counter);
searchIndex.search3(8);
console.log(searchIndex.Counter);