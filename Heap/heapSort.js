// let us create the binary heap

function buildHeap(arr, n){
    let parent = Math.floor((n-1)/2);
    for(let i = parent ; i >= 0 ; i--){
        heapify(arr, i, n);
    }
    
    // One by one extract an element from heap
    for(let i = n - 1 ; i >= 0 ; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }
}
// function heapify(arr, i, n){ // descending order heapsort
//     let smallest = i ;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;
    
//     if(left < n && arr[left] < arr[smallest]){
//         smallest = left;
//     }
//     if(right < n && arr[right] < arr[smallest]){
//         smallest = right;
//     }
//     if(i !== smallest){
//         [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
//         heapify(arr, smallest, n);
//     }
// }
// ascending order heapsort
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
let arr = [ 1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17 ];
let  n = arr.length;
buildHeap(arr, n);
printHeap(arr, n);