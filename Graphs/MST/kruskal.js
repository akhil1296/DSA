class DSU {
    constructor(n){
        this.parent = new Array(n).fill(-1);
        this.rank = new Array(n).fill(1);
    }
    find(i){
        if(this.parent[i] === -1){
            return i;
        }
        return this.parent[i] = this.find(this.parent[i]);
    }
    union(a, b){
        let s1 = this.find(a);
        let s2 = this.find(b);
        if(s1 !== s2){
            if( this.rank[s1] <  this.rank[s2]){
                this.parent[s1] = s2 ;
                this.rank[s2] = this.rank[s1] + this.rank[s2];
            }
            else{
                this.parent[s2] = s1 ;
                this.rank[s1] = this.rank[s1] + this.rank[s2];
            }
        }
    }
}
class Kruskal{
    mst(n, edges){
        const s = new DSU(n);
        let ans = 0 ;
        edges.sort();
        for(const[w, u, v] of edges){
            let s1 = s.find(u) ;
            let s2 = s.find(v) ;
            if(s1 !== s2){
                s.union(s1, s2);
                ans = ans + w ;
            }
        }
        return ans;
    }
}
// edges [weight, edge 1, edge 2]
// let n =  4 ;
// let edges = [[2, 1, 2], [3, 1, 3], [3, 2, 3],[1, 0, 1], [2, 0, 2], [2, 0, 3]];
let n = 11 ;
let edges = [[10, 1, 2], [12, 1, 3], [9, 2, 3], [8, 2, 9], [7, 5, 9], [3, 3, 5], [3, 5, 6], [1, 3, 6], [10, 9, 6], [8, 7, 9],[5, 9, 8], [6, 6, 8], [9, 7, 8],[2, 7, 9], [4, 8, 9]] ;
const obj = new Kruskal();
let ans = obj.mst(n, edges);
console.log(ans);