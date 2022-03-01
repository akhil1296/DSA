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
let arr = [ 1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17 ];
let  n = arr.length;
buildHeap(arr, n);
printHeap(arr, n);


/*class GeneralMaximumHeap {
    constructor(){

    }

    builHeap(array){
        let n = array.length;
        // Index of last non-leaf node
        let index = Math.floor((n-1)/2);
        // Perform reverse level order traversal
        // from last non-leaf node and heapify
        // each node
        for(let i = index ; i >= 0 ; i--){
            this.heapify(array, n, i);
        }
        this.showHeap(array);
    }

    heapify(array, n, i){
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        
        // If left child is larger than root
        if(left < n && array[left] > array[largest]){
            largest = left;
        }
        // If right child is larger than root
        if(right < n && array[right] > array[largest]){
            largest = right;
        }
         // If largest is not root
        if(i !== largest){
            [array[i], array[largest]] = [array[largest], array[i]];
            this.heapify(array, n, largest);
        }
    }
    
    showHeap(array){
       console.log("After Heapifying ", array);
    }
}

const mainFunction = () => {
    let array = [14, 16, 89, 45, 90, 11, 76];
    const heap = new GeneralMaximumHeap();
    heap.builHeap(array);
};

mainFunction();

exports = {
    mainFunction,
};

*/