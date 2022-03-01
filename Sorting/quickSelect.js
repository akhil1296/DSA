class QuickSelect {
    partition(arr, start, end) {
        let i = start - 1;
        let pivot = arr[end];
        for (let j = start; j < end; j++) {
            if (arr[j] > pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
        return i + 1;
    }
    quickSelect(arr, start, end, k) {
        if (start >= end) {
            return arr[end];
        }
        let pivotIndex = this.partition(arr, start, end);
        if (k === pivotIndex) {
            return arr[k];
        }
        else if (k < pivotIndex) {
            return this.quickSelect(arr, start, pivotIndex - 1, k);
        }
        else {
            return this.quickSelect(arr, pivotIndex + 1, end, k);
        }
    }
}
let arr = [3,2,3,1,2,4,5,5,6] ;
// let arr = [0, 5, 2, 3, 1];
let k = 4;
const obj = new QuickSelect();
let res = obj.quickSelect(arr, 0, arr.length - 1, k - 1);
console.log(res, arr);