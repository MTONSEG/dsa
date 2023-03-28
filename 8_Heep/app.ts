// class Heep {
// 	private heep: number[] = [0];
// 	private sorted: number[] = [];

// 	insert(value: number) {
// 		this.heep.push(value);

// 		let index: number = this.heep.length - 1;

// 		while (index > 1 && this.heep[index] < this.heep[Math.floor(index / 2)]) {
// 			let tmp: number = this.heep[index];

// 			this.heep[index] = this.heep[Math.floor(index / 2)];
// 			this.heep[Math.floor(index / 2)] = tmp;

// 			index = Math.floor(index / 2);
// 		}
// 	}

// 	delete(index: number): number {
// 		if (this.heep.length > 2) {
// 			let value = this.heep[index];
// 			this.heep[index] = this.heep.pop();

// 			let lastIndex: number = this.heep.length - 1;

// 			while (index * 2 <= lastIndex) {
// 				let minEl: number = index * 2;

// 				if (minEl + 1 <= lastIndex && this.heep[minEl] > this.heep[minEl + 1]) {
// 					minEl += 1;
// 				}

// 				if (this.heep[index] > this.heep[minEl]) {
// 					let tmp: number = this.heep[index];
// 					this.heep[index] = this.heep[minEl];
// 					this.heep[minEl] = tmp;
// 				}

// 				index = minEl;
// 			}

// 			return value;
// 		} else if (this.heep.length == 2) {
// 			return this.heep.pop();
// 		}
// 	}

// 	get data(): number[] {
// 		return this.heep
// 	}

// 	sort() {
// 		while (this.heep.length > 1) {
// 			this.sorted.push(this.delete(1));
// 		}
// 	}
// }

// let heep = new Heep();

// let arr: number[] = [1, 3, 3, 9, 3, 2, 4, 5, 34, 24];

// for (let item of arr) heep.insert(item);

// console.log(heep.data);
// console.log(heep);
// heep.sort();
// console.log(heep);



class MaxHeep {
	private heep: number[] = [];
	private sorted: number[] = [];

	insert(num: number) {
		this.heep.push(num);

		if (this.heep.length > 1) {
			let index: number = this.heep.length - 1;
			let parent: number = this.parentIndex(index);

			while (this.heep[parent] && this.heep[index] > this.heep[parent]) {
				this.swap(index, parent);
				index = this.parentIndex(index);
				parent = this.parentIndex(index);
			}
		}
	}

	delete(): number {
		if (this.heep.length > 1) {
			let value: number = this.heep.shift();
			this.heep.unshift(this.heep.pop());

			console.log(this.heep);

			let index: number = 0;
			let leftChild: number = this.leftChildIndex(index);
			let rightChild: number = this.rightChildIndex(index);


			while (this.heep[leftChild] && index <= this.heep.length - 1) {
				let maxChild = leftChild;

				if (this.heep[rightChild] && this.heep[rightChild] > this.heep[leftChild]) {
					maxChild = rightChild;
				}

				this.swap(index, maxChild);

				index = maxChild;
				leftChild = this.leftChildIndex(index);
				rightChild = this.rightChildIndex(index);
				console.log(this.heep);
			}

			return value;
		} else {
			return this.heep.pop();
		}
	}

	// sort(): void {
	// 	let size: number = this.heep.length;

	// 	for (let i: number = 0; i < size; i++) {
	// 		this.sorted.push(this.delete());
	// 	}
	// }

	getHeep = (): number[] => this.heep;

	parentIndex = (index: number): number => Math.floor((index - 1) / 2);
	leftChildIndex = (index: number): number => Math.floor((index * 2) + 1);
	rightChildIndex = (index: number): number => Math.floor((index * 2) + 2);

	swap(a: number, b: number) {
		let tmp: number = this.heep[a];
		this.heep[a] = this.heep[b];
		this.heep[b] = tmp;
	}

	fill(arr: number[]): void {
		for (let elem of arr) this.insert(elem);
	}
}

let heep = new MaxHeep();

let arr: number[] = [34, 22, 1, 2, 3434, 23, 43, 58];

heep.fill(arr);

console.log(heep);

console.log(heep);