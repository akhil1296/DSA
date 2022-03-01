// let us create the binary heap

function buildHeap(arr, n){
    let parent = Math.floor((n-1)/2);
    for(let i = parent ; i >= 0 ; i--){
        heapify(arr, i, n);
    }
}
function heapify(arr, i, n){
    let smallest = i ;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    
    if(left < n && arr[left] < arr[smallest]){
        smallest = left;
    }
    if(right < n && arr[right] < arr[smallest]){
        smallest = right;
    }
    if(i !== smallest){
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, smallest, n);
    }
}
function printHeap(arr, n){
    console.log(arr);
}
let arr = [ 1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17 ];
let  n = arr.length;
buildHeap(arr, n);
printHeap(arr, n);






// class GeneralMinimumHeap {
    
//     builHeap(array){
//         let n = array.length;
//         let index = Math.floor((n-1)/2);
//         for(let i = index ; i >= 0; i--){
//             this.heapify(array, n, i);
//         }
//         this.showHeap(array);
//     }

//     heapify(array, n, i){
//         let smallest = i ;
//         let left = 2 * i + 1 ;
//         let right = 2 * i + 2 ;
//         if(left < n && array[left] < array[smallest]){
//             smallest = left;
//         }
//         if(right < n && array[right] < array[smallest]){
//             smallest = right;
//         }
//         if( i !== smallest){
//             [array[i], array[smallest]] = [array[smallest], array[i]];
//             this.heapify(array, n, smallest);
//         }   
//     }
    
//     showHeap(array){
//         console.log("After Heapifying ", array);
//     }
// }

// const mainFunction = () => {
//     let array = [90, 45, 89, 14, 16, 11, 76 ];
//     const heap = new GeneralMinimumHeap();
//     heap.builHeap(array);
// };

// mainFunction();

// exports = {
//     mainFunction,
// };