const { CyclicGraph } = require('../cyclicGraph');
const graph = new CyclicGraph();

class TopologicalSortingDFS {
    constructor() {
        this.res = [];
    }
    sort(adjList, n) {
        let visited = new Array(n).fill(false);
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                this.dfs(i, visited, adjList);
            }
        }
        return this.res;
    }
    // Using DFS
    dfs(node, visited, adjList) {
        visited[node] = true;
        adjList[node].forEach(child => {
            if (!visited[child]) {
                this.dfs(child, visited, adjList);
            }
        });
        this.res.unshift(node);
        return;
    }

}

let n = 6;
for (let i = 0; i < n; i++) {
    graph.addVertex(i);
}

graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(1, 4);
graph.addEdge(4, 5);
graph.addEdge(2, 3);
graph.addEdge(3, 5);




let adjList = graph.getGraph();
const obj = new TopologicalSortingDFS();
let res = obj.sort(adjList, n);
console.log(res);

