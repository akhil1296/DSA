class MergeSort {
    mergeArray(arr1, arr2) {
        let i = 0;
        let j = 0;
        let res = [];

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                res.push(arr1[i]);
                i++;
            } else {
                res.push(arr2[j]);
                j++;
            }
        }
        while (i < arr1.length) {
            res.push(arr1[i]);
            i++;
        }
        while (j < arr2.length) {
            res.push(arr2[j]);
            j++;
        }
        return res;
    }
    mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        let n = arr.length;
        let mid = Math.floor(n / 2);
        let left = this.mergeSort(arr.slice(0, mid));
        let right = this.mergeSort(arr.slice(mid));
        return this.mergeArray(left, right);
    }
}

let arr = [0, 5, 2, 3, 1];
const obj = new MergeSort();
let res = obj.mergeSort(arr);
console.log(res);