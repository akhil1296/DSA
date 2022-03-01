// let us create the binary heap

function buildHeap(arr, n){
    let parent = Math.floor((n-1)/2);
    for(let i = parent ; i >= 0 ; i--){
        heapify(arr, i, n);
    }
}
function heapify(arr, i, n){
    let largest = i ;
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
        heapify(arr, largest, n);
    }
}
function printHeap(arr, n){
    console.log(arr);
}
// Function to delete the root from Heap
function insert(arr, n)
    {   let key = 78 ;
    // Increase the size of Heap by 1
    n = n + 1;
    // Insert the element at end of Heap
    arr[n - 1] = key;
    // Heapify the new node following a

    buildHeap(arr, n);
    }
let arr = [ 1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17 ];
let  n = arr.length;
buildHeap(arr, n);
insert(arr, n);
printHeap(arr, n);