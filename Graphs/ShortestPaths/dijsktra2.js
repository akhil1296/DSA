function shortestReach(n, edges, s) {
    // Write your code here
    let obj = new Graph();
    for (let i = 1; i <= n; i++) {
        obj.addVertex(i);
    }
    for (const [u, v, w] of edges) {
        obj.addEdge(u, v, w);
    }
    let adj = obj.getGraph();
    let s1 = new Dijkstra();
    let ans = s1.ssp(n, s, adj);
    return ans;
}

class Graph {
    constructor() {
        this.adj = {};
    }
    addVertex(i) {
        if (!this.adj[i]) {
            this.adj[i] = [];
        }
    }
    addEdge(u, v, w) {
        this.adj[u].push({ node: v, wt: w });
        this.adj[v].push({ node: u, wt: w });
    }
    getGraph() {
        return this.adj;
    }
}

class Dijkstra {
    ssp(n, src, adj) {
        let res = [];
        let dist = new Array(n + 1).fill(Number.MAX_VALUE);

        for (let i = 1; i <= n; i++) {
            adj[i].sort((a, b) => {
                return a.wt - b.wt;
            });
        }
        let set = new Set();
        set.add({ node: src, wt: 0 });
        dist[src] = 0;

        while (set.size) {

            let node = set.values().next().value;
            let parent = node.node;
            let weightTillNow = node.wt;

            set.delete(node);

            adj[parent].forEach((nbr) => {
                let child = nbr.node;
                let weight = nbr.wt;

                let newWeight = weightTillNow + weight;
                if (newWeight < dist[child]) {
                    if (set.has({ node: child, wt: dist[child] })) {
                        set.delete({ node: child, wt: dist[child] });
                    }
                    set.add({ node: child, wt: newWeight });
                    dist[child] = newWeight;
                }
            });
        }
        console.log(dist);
        for (let i = 1; i <= n; i++) {
            if (i === src) {
                continue;
            }
            if (dist[i] === Number.MAX_VALUE) {
                res.push(-1);
                continue;
            }
            res.push(dist[i]);
        }
        return res;
    }
}

let n = 4;
let edges = [[1, 2, 24], [1, 4, 20], [3, 1, 3], [4, 3, 12]];
let s = 1;
let x = shortestReach(n, edges, s);
console.log(x);