const { GeneralGraph }  = require('../generalGraph');
const graph = new GeneralGraph();
for(let i = 0 ; i < 7 ; i++ ){
    graph.addVertex(i);
}
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(1, 0);
graph.addEdge(0, 4);
graph.addEdge(3, 4);
graph.addEdge(3, 5);
graph.addEdge(4, 5);
graph.addEdge(5, 6);

class ShortestDistance{
    constructor(list){
        this.adjacencyList = list ;
    }
    distance(start){
        let res = [];
        let queue = [];
        let visited  = new Map();
        let distance = new Map();
        
        queue.push(start);
        visited.set(start, true);
        distance.set(start, 0);
        let maxDistance = 0 ;
        while(queue.length){

            let currentVertex = queue.shift();
            res.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited.get(neighbour)){
                    queue.push(neighbour);
                    visited.set(neighbour, true);
                    distance.set(neighbour, distance.get(currentVertex)+1);
                    maxDistance = Math.max(maxDistance, distance.get(neighbour));
                }
            });
        }
        return maxDistance;
    }
    shortestPath(start, element){
        let queue = [];
        let visited  = new Map();
        let parent = new Map();
        
        queue.push(start);
        visited.set(start, true);
        parent.set(start, -1);

        while(queue.length){
            let currentVertex = queue.shift();
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited.get(neighbour)){
                    queue.push(neighbour);
                    visited.set(neighbour, true);
                    parent.set(neighbour, currentVertex);
                }
            });
        }
        let res = [];
        res.unshift(element);
        let parentOfElement ;
        while(parentOfElement !== start){
            parentOfElement = parent.get(element);
            res.unshift(parentOfElement);
            element = parentOfElement ;
        }
        console.log("path : ",res);
        
    }
    BFS(start){
        let res = [];
        let queue = [];
        let visited  = new Map();
        queue.push(start);
        visited.set(start, true);
        while(queue.length){
            let parent = queue.shift();
            res.push(parent);
            this.adjacencyList[parent].forEach(neighbour => {
                if(!visited.get(neighbour)){
                    queue.push(neighbour);
                    visited.set(neighbour, true);
                }
            });
        }
        return res;
    }
}

let list = graph.getGraph();
const dist = new ShortestDistance(list);
let start = 1 ;
let res = dist.distance(start);
console.log(res);
dist.shortestPath(1, 6)
module.exports = {
    ShortestDistance,
};