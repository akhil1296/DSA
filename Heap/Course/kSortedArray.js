function sortKsortedArray(arr, k){
    let minHeap = new Array(k).fill(Number.MIN_VALUE);
    
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > minHeap[0]){
            if(minHeap[0] !== Number.MIN_VALUE){
                res.push(minHeap[0]);
            }
            minHeap[0] = arr[i];
            heapify(minHeap, 0, k);
        }
    }
    minHeap.sort((a,b)=>{
        return a - b ;
    });
    for(let i = 0 ; i < k ; i++){
        res.push(minHeap[i]);
    }
    return res;
}
function heapify(arr, i, k){
    let smallest = i ;
    let left = 2 * i + 1 ;
    let right = 2 * i + 2; 
    if(left < k && arr[left] < arr[smallest]){
        smallest = left;
    }
    if(right < k && arr[right] < arr[smallest]){
        smallest = right;
    }
    if(i !== smallest){
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, smallest, k);
    }
    
}
let arr = [6, 5, 3, 2, 8, 10, 9];
let k = 3 ;
let ans = sortKsortedArray(arr, k);
console.log(ans);