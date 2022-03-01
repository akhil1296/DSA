/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 class Node{
    constructor(key, val){
        this.key = key;
        this.val = val;
    }
}
function topKFrequent(oldArr, k){
    let map = new Map();
    for(let i = 0 ; i < oldArr.length ; i++){
        map.set(oldArr[i], map.get(oldArr[i]) + 1 || 1) ;
    }
    // create a min heap
    let minHeap = new Array(k).fill(new Node(Number.MIN_VALUE, Number.MIN_VALUE));
    let arr = [];
    for(const [key, value] of map){
        arr.push(new Node(value, key));
    }
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].key > minHeap[0].key){
            minHeap[0] = arr[i];
            heapify(minHeap, 0, k);
        }
    }
    
    let res = [];
    for(let i = 0 ; i < minHeap.length ; i++){
        res.push(minHeap[i].val);
    }
    return res;
}

function heapify(arr, i, k){
    let smallest = i ;
    let left = 2 * i + 1 ;
    let right = 2 * i + 2 ;
    if(left < k && arr[left].key < arr[smallest].key){
        smallest = left;
    }
    if(right < k && arr[right].key < arr[smallest].key){
        smallest = right;
    }
    if(i !== smallest){
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, smallest, k);
    }
}
