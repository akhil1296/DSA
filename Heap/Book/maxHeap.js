//              1
//           /     \
//          3        5
//      /    \     /  \
//     4      6   13  10
//    / \    / \
//   9   8  15 17
class BinaryHeap {
    buildHeap(arr, n) {
        let index = Math.floor((n - 1) / 2);
        for (let i = index; i >= 0; i--) {
            this.heapify(arr, i, n);
        }
        return arr;
    }
    heapify(arr, i, n) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }
        if (i !== largest) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            this.heapify(arr, largest, n);
        }
    }
}


const mainFunction = () => {
    const heap = new BinaryHeap();
    const arr = [17, 15, 13, 9, 6, 5, 10, 4, 8, 3, 1];
    let size = arr.length;
    let min = heap.buildHeap(arr, size);
     return min;
};

module.exports = {
    mainFunction,
};