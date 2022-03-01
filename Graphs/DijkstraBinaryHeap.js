class PriorityQueue {
    constructor() {
        this.array = [];
    }
    enqueue(val, priority) {
        this.node = new Node(val, priority);
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
        return lastElement;
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
        this.val = value;
        this.priority = priority;
    }
}

class WeightedGraphs{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({ node : vertex2 , weight});
        this.adjacencyList[vertex2].push({ node : vertex1 , weight});
    }
    showGraph(){
        console.log(this.adjacencyList);
    }
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; // to return at end
        let smallest;
        // build up Initial State
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            }
            else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while(nodes.array.length){
            smallest = nodes.dequeue().val;
            
            // console.log('smal', smallest);
            if(smallest === finish){
                //  We are done
                // Build up path to return at end
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        // Updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueu in Priority Queue with new priority
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        console.log('distance : ',distances);
        return path.concat(smallest).reverse();
    }
}

const graph = new WeightedGraphs();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B" ,4);
graph.addEdge("A", "C" ,2);
graph.addEdge("B", "E" ,3);
graph.addEdge("C", "D" ,2);
graph.addEdge("C", "F" ,4);
graph.addEdge("D", "E" ,3);
graph.addEdge("D", "F" ,1);
graph.addEdge("E", "F" ,1);
// graph.showGraph();
let x = graph.Dijkstra("A", "E");
console.log('path : ',x);
