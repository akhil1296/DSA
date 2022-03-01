class DSU{
    constructor(n){
        this.parent = new Array(n).fill(-1);
        this.rank = new Array(n).fill(1);
    }
    //find
    find(i){
        if(this.parent[i] ===  -1){
            return i;
        }
        return this.find(this.parent[i]);
    }
    //union
    union(a, b){
        let s1 = this.find(a);
        let s2 = this.find(b);
        if(s1 !== s2){
            if(this.rank[s1] > this.rank[s2]){
                this.parent[s2] = s1 ;
                this.rank[s1] = this.rank[s1] + this.rank[s2] ;
            }
            else{
                this.parent[s1] = s2 ;
                this.rank[s2] = this.rank[s1] + this.rank[s2] ;
            }
        }
    }
    containsCycle(edges){
        for(const [u,v] of edges){
            let s1 = this.find(u);
            let s2 = this.find(v);
            if(s1 !== s2){
                this.union(s1, s2);
            }
            else{
                return true;
            }
        }
        return false;
    }
}

let n = 6 ;
let edges = [[0,1],[0,2],[0,3],[1,2]];
const obj = new DSU(n);

let res = obj.containsCycle(edges);
console.log(res);
console.log("Total rank : ",obj.rank);