class RerootingTree {
    constructor(n) {
        this.adj = {};
        this.dp = new Array(n).fill(0);
        this.sub = new Array(n).fill(0);
        this.ans = new Array(n).fill(0);
    }
    addVertex(i) {
        if (!this.adj[i]) {
            this.adj[i] = [];
        }
    }
    addEdge(u, v) {
        this.adj[u].push(v);
        this.adj[v].push(u);
    }
    dfs(curr, par) {
        this.sub[curr] = 0;
        this.dp[curr] = 1;

        this.adj[curr].forEach(x => {
            if (x !== par) {
                this.dfs(x, curr);
                this.dp[curr] += this.dp[x];
                this.sub[curr] += (this.sub[x] + this.dp[x]);
            }
        });

        return;
    }
    dfs1(curr, par) {
        let val = this.sub[curr];
        if (par !== 0) {
            let z = this.ans[par] - this.sub[curr] - this.dp[curr];
            val = val + z + n - this.dp[curr];
            this.ans[curr] = val;
        }
        this.adj[curr].forEach(x => {
            if (x !== par) {
                this.dfs1(x, curr);
            }
        });
    }
    main(n, edges) {
        for (let i = 1; i <= n; i++) {
            this.addVertex(i);
        }
        for (const [u, v] of edges) {
            this.addEdge(u, v);
        }


        this.dfs(1, 0);
        this.ans[1] = this.sub[1];
        this.dfs1(1, 0);

        let distance = []; 
        for (let i = 1; i <= n; i++)
        {
            distance.push(this.ans[i]);
        }
        return distance;
    }
}

let n = 5;
let edges = [[1, 2], [1, 3], [3, 4], [3, 5]];

const obj = new RerootingTree(n);
let ans = obj.main(n, edges);
console.log(ans);