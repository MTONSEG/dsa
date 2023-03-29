let test1: number[] = [40, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22];
let test2: number[] = [40, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22];
let test3: number[] = [40, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22];
let test4: number[] = [40, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22];
let test5: number[] = [40, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22];
let test6: number[] = [40, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22];

class BubbleSort {
	sort(array: number[]): number[] {

		for (let i: number = 0; i < array.length; i++) {
			for (let k: number = 0; k < array.length - 1; k++) {
				let first: number = array[k];
				let second: number = array[k + 1];

				if (first > second) {
					Main.swap(array, k, k + 1);
				}
			}
		}

		return array;
	}
}

class QuickSort {
	sortLight(array: number[]): number[] {
		if (array.length < 2) return array;

		const pivotIndex: number = Math.floor(array.length / 2);
		const pivot: number = array[pivotIndex];
		const less: number[] = [];
		const more: number[] = [];

		for (let i: number = 1; i < array.length; i++) {
			if (i === pivotIndex) continue;

			if (array[i] <= pivot) {
				less.push(array[i]);
			} else {
				more.push(array[i]);
			}
		}

		return [...this.sortLight(less), pivot, ...this.sortLight(more)];
	}

	sort(array: number[], leftIndex: number, rightIndex: number): number[] {
		if (array.length < 2) return array;

		let currentIndex: number = this.partition(array, leftIndex, rightIndex);

		if (leftIndex < currentIndex - 1) this.sort(array, leftIndex, currentIndex - 1);

		if (currentIndex < rightIndex) this.sort(array, currentIndex, rightIndex);
	}

	private partition(array: number[], leftIndex: number, rightIndex: number) {
		let pivotIndex = Math.floor((leftIndex + rightIndex) / 2);
		let pivot: number = array[pivotIndex];

		while (leftIndex <= rightIndex) {
			while (array[leftIndex] < pivot) {
				leftIndex++;
			}

			while (array[rightIndex] > pivot) {
				rightIndex--;
			}

			if (leftIndex <= rightIndex) {
				Main.swap(array, leftIndex, rightIndex);
				leftIndex++;
				rightIndex--;
			}
		}

		return leftIndex;
	}

	private swap<T>(arr: T[], index1: number, index2: number) {
		let tmp: T = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = tmp;
	}
}

class SelectionSort {
	sort(array: number[]): number[] {
		for (let i: number = 0; i < array.length - 1; i++) {
			let indexMin: number = i;

			for (let k: number = i + 1; k < array.length; k++) {

				if (array[indexMin] > array[k]) {
					indexMin = k;
				}
			}

			if (indexMin != i) {
				Main.swap(array, indexMin, i);
			}
		}

		return array;
	}
}

class InsertSort {
	sort(array: number[]): number[] {
		for (let i: number = 0; i < array.length; i++) {
			let j = i + 1;

			while (j > 0 && array[j - 1] > array[j]) {
				Main.swap(array, j, j - 1);
				j--;
			}
		}

		return array;
	}
}

class Main {
	private storage: number[] = [];
	private bubble = new BubbleSort();
	private quick = new QuickSort();
	private selection = new SelectionSort();
	private insert = new InsertSort();
	static count: number = 0;

	constructor(num: number) {
		this.fill(num);
	}

	static swap<T>(arr: T[], index1: number, index2: number) {
		let tmp: T = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = tmp;

		Main.count++;
	}

	bubbleSort(array?: number[]): void {
		if (!array) array = this.storage;

		console.log(`Start - ${this.date()}`);

		this.bubble.sort(array);

		console.log(`Finish - ${this.date()}`);

		console.log(`Bubble - ${Main.count}`, '\n----------\n');

		Main.count = 0;
	}

	quickSort(array?: number[]): void {
		if (!array) array = this.storage;

		console.log(`Start - ${this.date()}`);

		this.quick.sort(array, 0, array.length - 1);

		console.log(`Finish - ${this.date()}`);

		console.log(`Quick - ${Main.count}`, '\n----------\n');

		Main.count = 0;
	}

	selectionSort(array?: number[]): void {
		if (!array) array = this.storage;

		console.log(`Start - ${this.date()}`);

		this.selection.sort(array);

		console.log(`Finish - ${this.date()}`);

		console.log(`Selection - ${Main.count}`, '\n----------\n');
		Main.count = 0;
	}

	insertSort(array?: number[]): void {
		if (!array) array = this.storage;

		console.log(`Start - ${this.date()}`);

		this.insert.sort(array);

		console.log(`Finish - ${this.date()}`);

		console.log(`Insert - ${Main.count}`, '\n----------\n');
		Main.count = 0;
	}

	getData = (): number[] => this.storage;

	date() {
		return (`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
	}

	fill(num: number): void {
		this.storage = [];

		for (let i: number = 0; i < num; i++) {
			let random: number = Math.floor(Math.random() * (100 - 1) + 1);
			this.storage.push(random);
		}
	}
}

const main = new Main(10);

let storage: number[] = main.getData();

main.bubbleSort(test1);
main.fill(10);

main.quickSort(test2);
main.fill(10);

main.selectionSort(test3);
main.fill(10);

main.insertSort(test4);
main.fill(10);

console.log('End');
