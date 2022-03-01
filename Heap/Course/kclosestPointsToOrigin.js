/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 class Node{
    constructor(key, val){
        this.key = key;
        this.val = val;
    }
}
var kClosest = function(points, k) {
    let arr = [];
    for(const [u, v] of points){
        let dist = u * u + v * v ;
        arr.push(new Node(dist, [u, v]));
    }
    
    let maxHeap = new Array(k).fill(new Node(Number.MAX_VALUE, []));
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].key < maxHeap[0].key){
            maxHeap[0] = arr[i];
            heapify(maxHeap, 0, k);
        }
    }
  
    let res = [];
     
    for(let i = 0 ; i < maxHeap.length ; i++){
        res.push(maxHeap[i].val);
    }
    return res;
};
function heapify(arr, i, k){
    let largest = i ;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if(left < k && arr[left].key > arr[largest].key){
        largest = left;
    }
    if(right < k && arr[right].key > arr[largest].key){
        largest = right;
    }
    if(i !== largest){
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, largest, k);
    }
    
}

