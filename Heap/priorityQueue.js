class PriorityQueue {
    constructor() {
        this.array = [];
    }
    enqueue(element, priority) {
        this.node = new Node(element, priority);
        this.array.push(this.node);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.array.length - 1;
        let element = this.array[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.array[parentIndex];
            if (element.priority <= parent.priority) {
                break;
            }
            this.array[parentIndex] = element;
            this.array[index] = parent;
            index = parentIndex;
        }
    }
    dequeue(){
        // Replace the root with the last element
        let lastElement = this.array.pop();
        this.array[0] = lastElement;
        this.sinkDown(0);
     }
    sinkDown(i){
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        // if left child is larger than root element
        if(left < this.array.length && this.array[left].priority > this.array[largest].priority){
            largest = left;
        }
        // if right child is larger than root element
        if(right < this.array.length && this.array[right].priority > this.array[largest].priority){
            largest = right;
        }
        // If largest is not root
        if(i !== largest){
            [this.array[i], this.array[largest]] = [this.array[largest], this.array[i]];
            this.sinkDown(largest); 
        }
    }
    showPriorityQueue() {
        this.array.sort((a,b) => {
           return a.priority - b.priority;
        });
        this.array.forEach((element) =>{
            console.log(element);
        });
    }
}
class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}
let ar = [14, 16, 89, 45, 90, 11, 45, 76];
const queue = new PriorityQueue();
let i = 1;
ar.forEach((element) => {
    queue.enqueue(element, i++);
});
queue.showPriorityQueue();
queue.dequeue();
console.log('After dequeue ');
queue.showPriorityQueue();
