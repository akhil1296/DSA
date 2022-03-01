const { WeightedGraphs } = require('../WeightedGraphs');
const graph = new WeightedGraphs();

class Dijkstra {
    shortestPath(n, adj, src, dest) {
        let dist = new Array(n).fill(Number.MAX_VALUE);
        for (let i = 0; i < n ; i++) {
            adj[i].sort((a, b) => {
                return a.weight - b.weight;
            });
        }
         
        let set = new Set();
        dist[src] = 0;
        set.add({ node: src, weight: 0 });

        while (set.size) {
            let node = set.values().next().value;
            let parent = node.node;
            let weightTillNow = node.weight;

            set.delete(node);

            adj[parent].forEach((child) => {

                let childNode = child.node;
                let weight = child.weight;
                let newDistance = weightTillNow + weight;

                if (newDistance < dist[childNode]) {
                    if (set.has({ node: childNode, weight: dist[childNode] })) {
                        set.delete({ node: childNode, weight: dist[childNode] });
                    }
                    dist[childNode] = newDistance;
                    set.add({ node: childNode, weight: newDistance });
                }
                
            });
        }
        
        return dist[dest];
    }
}

let n = 5;

for (let i = 0; i < n; i++) {
    graph.addVertex(i);
}

graph.addEdge(0, 2, 4);
graph.addEdge(0, 3, 7);
graph.addEdge(0, 1, 1);

graph.addEdge(1, 2, 1);
graph.addEdge(2, 3, 2);
graph.addEdge(3, 4, 3);

let adj = graph.getGraph();

const SSSP = new Dijkstra();
let src = 0;
let dest = 4;

let res = SSSP.shortestPath(n, adj, src, dest);
console.log(res);

module.exports = {
    Dijkstra,
}