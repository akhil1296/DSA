class SpecialPaths {
    constructor(n) {
        this.parent = new Array(n).fill(-1);
        this.rank = new Array(n).fill(1);
    }
    //find
    find(i) {
        if (this.parent[i] === -1) {
            return i;
        }
        return this.parent[i] = this.find(this.parent[i]);
    }
    //union
    union(a, b) {
        let s1 = this.find(a);
        let s2 = this.find(b);
        if (s1 !== s2) {
            if (this.rank[s1] > this.rank[s2]) {
                this.parent[s2] = s1;
                this.rank[s1] = this.rank[s1] + this.rank[s2];
            }
            else {
                this.parent[s1] = s2;
                this.rank[s2] = this.rank[s1] + this.rank[s2];
            }
        }
    }
    solve(edges, ar, start, end) {
        let left = 0;
        let right = 100000;
        let ans = right ;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2 );

            for (const [u, v] of edges) {

                let diff = Math.abs(ar[u-1] - ar[v-1]);

                if(diff <= mid){
                    this.union(u, v);
                }
            }

            let s1 = this.find(start);
            let s2 = this.find(end);
            if (s1 === s2) {
                right = mid - 1 ;
                ans = mid ;
            }
            else {
                left = mid + 1 ;
            }
        }
        return ans;
    }
}

let n = 5;
let ar = [8, 5, 6, 1];
let edges = [[1, 2], [2, 3], [3, 4], [4, 1], [2, 4]];
let start = 2 ;
let end = 4 ;
const obj = new SpecialPaths(n);

let res = obj.solve(edges, ar, start, end);
console.log(res);
console.log("Total parent : ", obj.parent);
console.log("Total rank : ", obj.rank);