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

				Main.count++;
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
				Main.count++;
			}

			while (array[rightIndex] > pivot) {
				rightIndex--;
				Main.count++;
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

				Main.count++;
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

				Main.count++;
			}
		}

		return array;
	}
}

class MergeSort {
	sort(array: number[]): number[] {
		if (array.length < 2) return array;

		let middle: number = Math.floor(array.length / 2);
		let left: number[] = array.slice(0, middle);
		let right: number[] = array.slice(middle);

		return this.merge(this.sort(left), this.sort(right));
	}

	private merge(left: number[], right: number[]): number[] {
		let sortArr: number[] = [];

		while (right.length && left.length) {
			if (left[0] < right[0]) {
				sortArr.push(left.shift());
				Main.count++
			} else {
				sortArr.push(right.shift());
				Main.count++
			}
		}

		return [...sortArr, ...left.slice(), ...right.slice()]
	}
}

class ShellShort {
	sort(arr: number[]): void {
		let gap: number = Math.floor(arr.length / 2);

		while (gap >= 1) {
			for (let i: number = gap; i < arr.length; i++) {
				let current: number = arr[i];
				let k: number = i;

				while (k > 0 && arr[k - gap] > current) {
					arr[k] = arr[k - gap];
					k -= gap;

					Main.count++;
				}

				arr[k] = current;
			}

			gap = Math.floor(gap / 2);
		}
	}
}

class Main {
	private storage: number[] = [];
	private bubble = new BubbleSort();
	private quick = new QuickSort();
	private selection = new SelectionSort();
	private insert = new InsertSort();
	private merge = new MergeSort();
	private shell = new ShellShort();
	static count: number = 0;

	constructor(num?: number) {
		if (num) this.fill(num);
	}

	static swap<T>(arr: T[], index1: number, index2: number) {
		let tmp: T = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = tmp;
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

	mergeSort(array?: number[]): void {
		if (!array) array = this.storage;

		console.log(`Start - ${this.date()}`);

		let res = this.merge.sort(array);

		for (let i: number = 0; i < array.length; i++) {
			array[i] = res[i];
		}

		console.log(`Finish - ${this.date()}`);

		console.log(`Merge - ${Main.count}`, '\n----------\n');
		Main.count = 0;
	}

	shellSort(array?: number[]): void {
		if (!array) array = this.storage;

		console.log(`Start - ${this.date()}`);

		this.shell.sort(array);

		console.log(`Finish - ${this.date()}`);

		console.log(`Shell - ${Main.count}`, '\n----------\n');
		Main.count = 0;
	}

	getData = (): number[] => this.storage;

	date() {
		return (`${new Date().getHours()}h:${new Date().getMinutes()}m:${new Date().getSeconds()}s:${new Date().getMilliseconds()}ms`);
	}

	fill(num: number): void {
		this.storage = [];

		for (let i: number = 0; i < num; i++) {
			let random: number = Math.floor(Math.random() * ((num * 2) - 1) + 1);
			this.storage.push(random);
		}
	}
}

const main = new Main(50000);

let storage: number[] = main.getData();

main.bubbleSort();
main.fill(50000);

main.quickSort();
main.fill(50000);

main.selectionSort();
main.fill(50000);

main.insertSort();
main.fill(50000);

main.mergeSort();
main.fill(50000);

main.shellSort();
main.fill(50000);

console.log('End');
