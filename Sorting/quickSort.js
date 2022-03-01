class QuickSort {
    partition(arr, start, end) {
        let i = start - 1;
        let pivot = arr[end];

        for (let j = start; j < end; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
        return i + 1;
    }
    quickSort(arr, start, end) {
        if (start >= end) {
            return;
        }
        let partitionIndex = this.partition(arr, start, end);
        this.quickSort(arr, start, partitionIndex - 1);
        this.quickSort(arr, partitionIndex + 1, end);
        return arr;
    }
}

let arr = [0, 5, 2, 3, 1];
const obj = new QuickSort();
let res = obj.quickSort(arr, 0, arr.length - 1);
console.log(res);