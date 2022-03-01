/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function (n, edges) {
    const obj = new Graph();
    let res = obj.mst(n, edges);
    return res;
};

class DSU {
    constructor(n) {
        this.parent = new Array(n).fill(-1);
        this.rank = new Array(n).fill(1);
    }
    find(i) {
        if (this.parent[i] === -1) {
            return i;
        }
        return this.parent[i] = this.find(this.parent[i]);
    }
    union(a, b) {
        let s1 = this.find(a);
        let s2 = this.find(b);
        if (s1 !== s2) {
            if (this.rank[s1] < this.rank[s2]) {
                this.parent[s1] = s2;
                this.rank[s2] = this.rank[s1] + this.rank[s2];
            }
            else {
                this.parent[s2] = s1;
                this.rank[s1] = this.rank[s1] + this.rank[s2];
            }
        }
    }
}


class Graph {
    mst(n, edges) {
        const s = new DSU(n);
        let ans = [];

        let critical = [];
        let pseudoCritical = [];

        for (let i = 0; i < edges.length; i++) {
            edges[i].push(i);
        }

        edges.sort((a, b) => {
            return a[2] - b[2];
        });

        let min = this.getMST(edges, -1, s);
         
        for (let i = 0; i < edges.length; i++) {

            let e = edges[i];
            let cost = this.getMST(edges, e[3], s);

            if (cost > min || s.find(e[0]) !== s.find(e[1])) {
                critical.push(e[3]);
                continue;
            }

            s.union(e[0], e[1]);
            cost = e[2];

            cost = cost + this.getMST(edges, e[3], s);
            if (cost === min) {
                pseudoCritical.push(e[3]);
            }

        }

        ans.push(critical);
        ans.push(pseudoCritical);
        return ans;
    }

    getMST(edges, avoid, s) {
        let ans = 0;
        for (const [u, v, w, index] of edges) {
            if (index === avoid) {
                continue;
            }
            let s1 = s.find(u);
            let s2 = s.find(v);

            if (s1 !== s2) {
                s.union(s1, s2);
                ans = ans + w;
            }

        }

        return ans;
    }

}

let n = 6, edges = [[0,1,1],[1,2,1],[0,2,1],[2,3,4],[3,4,2],[3,5,2],[4,5,2]] ;
// let n = 4, edges = [[0,1,1],[1,2,1],[2,3,1],[0,3,1]];
// let n = 5, edges = [[0, 1, 1], [1, 2, 1], [2, 3, 2], [0, 3, 2], [0, 4, 3], [3, 4, 3], [1, 4, 6]];
let ans = findCriticalAndPseudoCriticalEdges(n+1, edges);
console.log(ans);