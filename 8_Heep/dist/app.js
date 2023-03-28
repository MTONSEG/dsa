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
    constructor() {
        this.heep = [];
        this.sorted = [];
        this.getHeep = () => this.heep;
        this.parentIndex = (index) => Math.floor((index - 1) / 2);
        this.leftChildIndex = (index) => Math.floor((index * 2) + 1);
        this.rightChildIndex = (index) => Math.floor((index * 2) + 2);
    }
    insert(num) {
        this.heep.push(num);
        if (this.heep.length > 1) {
            let index = this.heep.length - 1;
            let parent = this.parentIndex(index);
            while (this.heep[parent] && this.heep[index] > this.heep[parent]) {
                this.swap(index, parent);
                index = this.parentIndex(index);
                parent = this.parentIndex(index);
            }
        }
    }
    delete() {
        if (this.heep.length > 1) {
            let value = this.heep.shift();
            this.heep.unshift(this.heep.pop());
            console.log(this.heep);
            let index = 0;
            let leftChild = this.leftChildIndex(index);
            let rightChild = this.rightChildIndex(index);
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
        }
        else {
            return this.heep.pop();
        }
    }
    sort() {
        let size = this.heep.length;
        for (let i = 0; i < size; i++) {
            this.sorted.push(this.delete());
        }
    }
    swap(a, b) {
        let tmp = this.heep[a];
        this.heep[a] = this.heep[b];
        this.heep[b] = tmp;
    }
    fill(arr) {
        for (let elem of arr)
            this.insert(elem);
    }
}
let heep = new MaxHeep();
let arr = [34, 22, 1, 2, 3434, 23, 43, 58];
heep.fill(arr);
console.log(heep);
heep.sort();
console.log(heep);
//# sourceMappingURL=app.js.map