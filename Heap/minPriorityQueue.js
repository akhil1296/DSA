class MinimumPQ {
    
    builHeap(array){
        let n = array.length;
        let index = Math.floor((n-1)/2);
        for(let i = index ; i >= 0; i--){
            this.heapify(array, n, i);
        }
        this.showHeap(array);
    }

    heapify(array, n, i){
        let smallest = i ;
        let left = 2 * i + 1 ;
        let right = 2 * i + 2 ;
        if(left < n && array[left].priority < array[smallest].priority){
            smallest = left;
        }
        if(right < n && array[right].priority < array[smallest].priority){
            smallest = right;
        }
        if( i !== smallest){
            [array[i], array[smallest]] = [array[smallest], array[i]];
            this.heapify(array, n, smallest);
        }   
    }
    
    showHeap(array){
        array.sort((a,b) => {
            return a.priority - b.priority;
         });
        console.log("After Min Heapifying ", array);
    }
}

class Node{
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
    }
}

const mainFunction = () => {
    let array = [90, 45, 89, 14, 16, 11, 76 ];
    let newArray = [];
    let k = 0 ;
    for(let i = 6 ; i >= 0 ; i--){
        let item = new Node(array[k++], i);
        newArray.push(item);
    }
    const heap = new MinimumPQ();
    heap.builHeap(newArray);
};

mainFunction();

exports = {
    mainFunction,
};