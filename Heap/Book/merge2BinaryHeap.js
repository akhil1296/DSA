const minHeap = require('./maxHeap');
let heap1 = minHeap.mainFunction();
let heap2 = [23, 31, 22, 16, 70, 45];
let merge = heap1.concat(heap2);
console.log(merge);

class MergeHeap{
    buildHeap(arr, n){
        let index = Math.floor((n-1)/2);
        for(let i = index ; i >= 0 ; i--){
            this.heapify(arr, i, n);
        }
        this.showHeap(arr);
    }
    heapify(arr, i, n){
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        if(left < n && arr[left] > arr[largest]){
            largest = left;
        }
        if(right < n && arr[right] > arr[largest]){
            largest = right;
        }
        if(i !== largest){
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            this.heapify(arr, largest, n);
        }
    }
    showHeap(arr){
        console.log(arr);
    }
}

const obj = new MergeHeap();
obj.buildHeap(merge, merge.length);