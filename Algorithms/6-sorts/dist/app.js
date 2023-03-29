let test1 = [40, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22];
let test2 = [40, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22];
let test3 = [40, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22];
let test4 = [40, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22];
let test5 = [40, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22];
let test6 = [40, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22, 31, 2, 32, 4, 7, 34, 87, 64, 38, 3, 22];
class BubbleSort {
    sort(array) {
        for (let i = 0; i < array.length; i++) {
            for (let k = 0; k < array.length - 1; k++) {
                let first = array[k];
                let second = array[k + 1];
                if (first > second) {
                    Main.swap(array, k, k + 1);
                }
            }
        }
        return array;
    }
}
class QuickSort {
    sortLight(array) {
        if (array.length < 2)
            return array;
        const pivotIndex = Math.floor(array.length / 2);
        const pivot = array[pivotIndex];
        const less = [];
        const more = [];
        for (let i = 1; i < array.length; i++) {
            if (i === pivotIndex)
                continue;
            if (array[i] <= pivot) {
                less.push(array[i]);
            }
            else {
                more.push(array[i]);
            }
        }
        return [...this.sortLight(less), pivot, ...this.sortLight(more)];
    }
    sort(array, leftIndex, rightIndex) {
        if (array.length < 2)
            return array;
        let currentIndex = this.partition(array, leftIndex, rightIndex);
        if (leftIndex < currentIndex - 1)
            this.sort(array, leftIndex, currentIndex - 1);
        if (currentIndex < rightIndex)
            this.sort(array, currentIndex, rightIndex);
    }
    partition(array, leftIndex, rightIndex) {
        let pivotIndex = Math.floor((leftIndex + rightIndex) / 2);
        let pivot = array[pivotIndex];
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
    swap(arr, index1, index2) {
        let tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
    }
}
class SelectionSort {
    sort(array) {
        for (let i = 0; i < array.length - 1; i++) {
            let indexMin = i;
            for (let k = i + 1; k < array.length; k++) {
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
    sort(array) {
        for (let i = 0; i < array.length; i++) {
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
    constructor(num) {
        this.storage = [];
        this.bubble = new BubbleSort();
        this.quick = new QuickSort();
        this.selection = new SelectionSort();
        this.insert = new InsertSort();
        this.getData = () => this.storage;
        this.fill(num);
    }
    static swap(arr, index1, index2) {
        let tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
        Main.count++;
    }
    bubbleSort(array) {
        if (!array)
            array = this.storage;
        console.log(`Start - ${this.date()}`);
        this.bubble.sort(array);
        console.log(`Finish - ${this.date()}`);
        console.log(`Bubble - ${Main.count}`, '\n----------\n');
        Main.count = 0;
    }
    quickSort(array) {
        if (!array)
            array = this.storage;
        console.log(`Start - ${this.date()}`);
        this.quick.sort(array, 0, array.length - 1);
        console.log(`Finish - ${this.date()}`);
        console.log(`Quick - ${Main.count}`, '\n----------\n');
        Main.count = 0;
    }
    selectionSort(array) {
        if (!array)
            array = this.storage;
        console.log(`Start - ${this.date()}`);
        this.selection.sort(array);
        console.log(`Finish - ${this.date()}`);
        console.log(`Selection - ${Main.count}`, '\n----------\n');
        Main.count = 0;
    }
    insertSort(array) {
        if (!array)
            array = this.storage;
        console.log(`Start - ${this.date()}`);
        this.insert.sort(array);
        console.log(`Finish - ${this.date()}`);
        console.log(`Insert - ${Main.count}`, '\n----------\n');
        Main.count = 0;
    }
    date() {
        return (`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
    }
    fill(num) {
        this.storage = [];
        for (let i = 0; i < num; i++) {
            let random = Math.floor(Math.random() * (100 - 1) + 1);
            this.storage.push(random);
        }
    }
}
Main.count = 0;
const main = new Main(10);
let storage = main.getData();
main.bubbleSort(test1);
main.fill(10);
main.quickSort(test2);
main.fill(10);
main.selectionSort(test3);
main.fill(10);
main.insertSort(test4);
main.fill(10);
console.log('End');
//# sourceMappingURL=app.js.map