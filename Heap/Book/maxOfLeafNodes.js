const minHeap = require('./minHeap');
let heap = minHeap.mainFunction();

//              1
//           /     \
//          3        5
//      /    \     /  \
//     4      6   13  10
//    / \    / \
//   9   8  15 17

const max = () => {
    console.log(heap);
    let size = heap.length;
    let parent = Math.floor((size-1)/2);
    let firstLeaf = parent;
    let maxElement = Number.MIN_VALUE;
    for(let i = firstLeaf ; i < size; i++){
        maxElement = Math.max(maxElement, heap[i]);
    }
    console.log(maxElement);
};

max();

module.exports = {
    max,
};