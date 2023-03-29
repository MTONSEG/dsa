class BubbleSort {
	private store: number[] = [];

	constructor() {
		this.fill();
	}

	get Store(): number[] {
		return this.store;
	}
	sort(type: string): number[] {
		if (type != 'up' && type != 'down') { throw new Error('invalid type') };

		for (let i: number = 0; i < this.store.length; i++) {
			for (let k: number = 0; k < this.store.length - 1; k++) {
				let first: number = this.store[k];
				let second: number = this.store[k + 1];

				if (type == 'up') {

					if (first < second) {
						this.swap(k, k + 1);
					}

				} else {

					if (first > second) {
						this.swap(k, k + 1);
					}
					
				}
			}
		}
		return this.store;
	}

	swap(fistIndex: number, secondIndex: number) {
		let tmp: number = this.store[fistIndex];
		this.store[fistIndex] = this.store[secondIndex];
		this.store[secondIndex] = tmp;
	}

	fill(): void {
		for (let i: number = 0; i < 10; i++) {
			let random: number = Math.floor(Math.random() * (100 - 1) + 1);

			this.store.push(random);
		}
	}
}

let bubble = new BubbleSort();
let test = bubble.Store;
bubble.sort('up');
console.log('End');