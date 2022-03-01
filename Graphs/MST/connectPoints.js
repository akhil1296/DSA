/**
 * @param {number[][]} points
 * @return {number}
 */
 var minCostConnectPoints = function(points) {
    const obj = new Kruskal();
    let ans = obj.mst(points);
    return ans;
};

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
 
class Kruskal{
    mst(edgesArray){
        let n = edgesArray.length;
        let edges = [];
    
        for(let i = 0 ; i < n ; i++){
           for(let j = i+1 ; j < n ; j++){
                let dist = Math.abs( edgesArray[i][0] - edgesArray[j][0] ) 
                + Math.abs( edgesArray[i][1] - edgesArray[j][1] ) ;
               edges.push([dist, i, j]);
           }    
        }
        edges.sort(function(a,b){
            return (a[0] - b[0]) ;
        });

        const s = new DSU(n);
        let ans = 0 ;
        for(const [w, u, v] of edges){
            let s1 = s.find(u);
            let s2 = s.find(v);
            if(s1 !== s2){
                ans = ans + w ;
                s.union(s1, s2);
            }
        }
        return ans;
    }
}

let edges = [[0,0],[2,2],[3,10],[5,2],[7,0]];
let ans = minCostConnectPoints(edges);
console.log(ans);