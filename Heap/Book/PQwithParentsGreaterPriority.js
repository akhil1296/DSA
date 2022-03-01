// This program will make a PQ with parents having higher Priority
class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue{
    buildPQ(arr, n){
        let index = Math.floor((n-1)/2);

        for(let i = index ; i >= 0 ; i-- ){
            this.heapify(arr, i, n);
        }
        this.showPQ(arr);
    }
    heapify(arr, i, n){
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        if(left < n && arr[left].priority > arr[largest].priority){
            largest = left;
        }
        if(right < n && arr[right].priority > arr[largest].priority){
            largest = right;
        }
        if(i !== largest){
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            this.heapify(arr, largest, n);
        }
    }
    showPQ(arr){
        console.log(arr);
    }
}

const PQ = new PriorityQueue();
const ar = [10, 9, 8, 7, 1, 2, 4, 3];
const pr = [1, 2, 3, 4, 5, 6, 7, 8];
let q = [];
for(let i = 0 ; i < ar.length ; i++ ){
    q.push(new Node(ar[i], pr[i]));
}
console.log(q, 'q after heapify');
PQ.buildPQ(q, ar.length);
