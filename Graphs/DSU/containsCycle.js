class DSU{
    constructor(n){
        this.parent = new Array(n).fill(-1);
        this.count = 0 ;
    }
    // find
    find(i){
        if(this.parent[i] === -1){
            return i ;
        }
        return this.find(this.parent[i]);
    }
    // union 
    union(a, b){
        let s1 = this.find(a);
        let s2 = this.find(b);
        if(s1 !== s2){
            this.parent[s2] = s1 ;
        }
    }
    // check if graph contains cycle
    containsCycle(edges){
        for(const[u,v] of edges){

            let s1 = this.find(u);
            let s2 = this.find(v);

            if(s1 !== s2){
                this.union(s1, s2);
            }
            else{
             this.count++;
             // return true;
            }
        }
        console.log(this.parent);
        return !this.count ? false : true;
    }
}

let n = 6 ;
let edges = [[0,1],[0,2],[0,3],[1,2]];
const obj = new DSU(n);

let res = obj.containsCycle(edges);
console.log(res);
console.log("Total cycles : ",obj.count);