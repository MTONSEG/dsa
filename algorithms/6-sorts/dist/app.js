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
                Main.count++;
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
    sort(array) {
        for (let i = 0; i < array.length; i++) {
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
    sort(array) {
        if (array.length < 2)
            return array;
        let middle = Math.floor(array.length / 2);
        let left = array.slice(0, middle);
        let right = array.slice(middle);
        return this.merge(this.sort(left), this.sort(right));
    }
    merge(left, right) {
        let sortArr = [];
        while (right.length && left.length) {
            if (left[0] < right[0]) {
                sortArr.push(left.shift());
                Main.count++;
            }
            else {
                sortArr.push(right.shift());
                Main.count++;
            }
        }
        return [...sortArr, ...left.slice(), ...right.slice()];
    }
}
class ShellShort {
    sort(arr) {
        let gap = Math.floor(arr.length / 2);
        while (gap >= 1) {
            for (let i = gap; i < arr.length; i++) {
                let current = arr[i];
                let k = i;
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
    constructor(num) {
        this.storage = [];
        this.bubble = new BubbleSort();
        this.quick = new QuickSort();
        this.selection = new SelectionSort();
        this.insert = new InsertSort();
        this.merge = new MergeSort();
        this.shell = new ShellShort();
        this.getData = () => this.storage;
        if (num)
            this.fill(num);
    }
    static swap(arr, index1, index2) {
        let tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
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
    mergeSort(array) {
        if (!array)
            array = this.storage;
        console.log(`Start - ${this.date()}`);
        let res = this.merge.sort(array);
        for (let i = 0; i < array.length; i++) {
            array[i] = res[i];
        }
        console.log(`Finish - ${this.date()}`);
        console.log(`Merge - ${Main.count}`, '\n----------\n');
        Main.count = 0;
    }
    shellSort(array) {
        if (!array)
            array = this.storage;
        console.log(`Start - ${this.date()}`);
        this.shell.sort(array);
        console.log(`Finish - ${this.date()}`);
        console.log(`Shell - ${Main.count}`, '\n----------\n');
        Main.count = 0;
    }
    date() {
        return (`${new Date().getHours()}h:${new Date().getMinutes()}m:${new Date().getSeconds()}s:${new Date().getMilliseconds()}ms`);
    }
    fill(num) {
        this.storage = [];
        for (let i = 0; i < num; i++) {
            let random = Math.floor(Math.random() * ((num * 2) - 1) + 1);
            this.storage.push(random);
        }
    }
}
Main.count = 0;
const main = new Main(40000);
let storage = main.getData();
main.bubbleSort();
main.fill(40000);
main.quickSort();
main.fill(40000);
main.selectionSort();
main.fill(40000);
main.insertSort();
main.fill(40000);
main.mergeSort();
main.fill(40000);
main.shellSort();
main.fill(40000);
console.log('End');
//# sourceMappingURL=app.js.map