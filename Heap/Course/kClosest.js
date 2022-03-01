/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 class Node{
    constructor(key, val){
        this.key = key;
        this.val = val;
    }
}
var findClosestElements = function(arr, k, x) {
    let newArr = [];
    
    for(let i = 0 ; i < arr.length ; i++){
        let diff = Math.abs(arr[i] - x);
        let node = new Node(diff, arr[i]);
        newArr.push(node);
    }
  
    //let us create the max heap
    let maxHeap = new Array(k).fill(new Node(Number.MAX_VALUE, Number.MAX_VALUE));
    
    for(let i = 0 ; i < newArr.length ; i++){
        if(newArr[i].key < maxHeap[0].key){
            maxHeap[0] = newArr[i];
            heapify(maxHeap, 0, k);
        }
    }
    
    let res = [];
    for(let i = 0 ; i < maxHeap.length ; i++){
        res.push(maxHeap[i].val);
    }
    return res.sort((a,b)=>{
        return a - b;
    });
};
function heapify(arr, i, k){
    let largest = i ;
    let left = 2 * i + 1 ;
    let right = 2 * i + 2 ;
    
    if(left < k && arr[left].key > arr[largest].key){
        largest = left ;
    }
    if(right < k && arr[right].key > arr[largest].key){
        largest = right ;
    }
    if(i !== largest){
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, largest, k);
    }
}