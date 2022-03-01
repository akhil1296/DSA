class PriorityQueue{
    constructor(){
        this.queue = [];
    }
    enqueue(val, priority){
        this.queue.push({val, priority});
        this.sort();
    }
    dequeue(){
        return this.queue.shift();
    }
    sort(){
        this.queue.sort((a,b) => a.priority - b.priority);
    }
    getPriorityQueue(){
        return this.queue;
    }
}

module.exports = {
    PriorityQueue
};