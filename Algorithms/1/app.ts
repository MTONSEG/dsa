class SearchIndex {
	private storage: number[] = [];
	private size: number = 0;

	input(size: number) {
		this.size = size;

		for (let i: number = 0; i < size; i++) {
			let random: number = this.createRandom(1, size * 2);
			this.storage.push(random);
		}
	}

	search(num: number): number {
		return this.storage.indexOf(num);
	}

	search2(num: number): boolean | number {
		let count: number = -1;

		for (let i: number = 0; i < this.size; i++) {
			count++;
			if (this.storage[i] === num) return count;
		}

		return false;
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
console.log(searchIndex.search(10));
console.log(searchIndex.search2(10));

console.log(searchIndex);