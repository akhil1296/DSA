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
        let smallest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        if (left < n && arr[left] < arr[smallest]) {
            smallest = left;
        }
        if (right < n && arr[right] < arr[smallest]) {
            smallest = right;
        }
        if (i !== smallest) {
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
            this.heapify(arr, smallest, n);
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