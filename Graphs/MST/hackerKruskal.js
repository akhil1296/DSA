
class Graph{
    
    calculate(n, uAr, vAr, wAr){
     const s = new DSU(n+1);
     
     let len = uAr.length;
     let edges = new Array(len) ;
     for(let i = 0 ; i < len ; i++){
         edges[i] = [uAr[i], vAr[i], wAr[i]];
     }
     edges.sort((a, b)=> {
        return a[2] - b[2]; 
     });
      
     let ans = 0 ;
     for(const [u, v, w] of edges){
         
         let s1 = s.find(u);
         let s2 = s.find(v);
         if(s1 !== s2){
             s.union(s1, s2);
             ans = ans + w ;
         }
     }
    return ans;      
    }
}

class DSU{
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
        if( s1 !== s2){
            if(this.rank[s1] < this.rank[s2]){
                this.parent[s1] = s2 ;
                this.rank[s2] = this.rank[s1] + this.rank[s2] ;
                
            }
            else{
                this.parent[s2] = s1 ;
                this.rank[s1] = this.rank[s1] + this.rank[s2] ;
                
            }
        }
    }
}

function kruskals(gNodes, gFrom, gTo, gWeight) {
    const graph = new Graph();
    let ans = graph.calculate(gNodes, gFrom, gTo, gWeight);
    return ans;
}
let n = 4 ;
let gFrom = [1,1,4,2,3,3];
let gTo = [2,3,1,4,2,4];
let gWeight = [5,3,6,7,4,5];
let ans = kruskals(n, gFrom, gTo, gWeight);
console.log(ans);
