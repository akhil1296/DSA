                     // 1
        //           /     \
        //          3        5
        //      /    \     /  \
        //     4      6   13  10
        //    / \    / \
        //   9   8  15 17
class BinaryHeap{
    buildHeap(arr, n){
        let index = Math.floor((n-1)/2);
        for(let i = index ; i >= 0 ; i-- ){
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
    delete(){
        let pop = arr.pop();
        arr[0] = pop;
        this.buildHeap(arr, arr.length);
    }
    insert(element){
        arr.push(element);
        this.buildHeap(arr, arr.length);
    }
    heapSort(arr, n){
        let index = Math.floor(n/2)-1;
        for(let i = index ; i >= 0 ; i--){
            this.heapify(arr, i, n);
        }
        for(let i = n-1 ; i > 0 ; i--){
            [arr[0], arr[i]] = [arr[i], arr[0]];
            this.heapify(arr, 0, i );
        }
        this.showHeap(arr);
    }
}

const heap = new BinaryHeap();
const arr = [17, 15, 13, 9, 6,5, 10,  4, 8, 3, 1];
let size = arr.length;
heap.buildHeap(arr, size);
// // [17, 15, 13, 9, 6,5, 10,  4, 8, 3, 1]
// heap.delete();
// heap.insert(12);
console.log('After heapsort');
heap.heapSort(arr, size);