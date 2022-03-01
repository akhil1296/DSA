/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
 var maxNumEdgesToRemove = function(n, edges) {
    const obj = new Graph();
    let res = obj.mst(n, edges);
    return res ;
};

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

class Graph{
    constructor(){
        
    }
    mst(n, edges){
        let total = edges.length ; // total edges provided
        let count = 0 ; // count of edges used
        
        let ans = 0 ; // total - count
    
        const s = new DSU(n+1);
        
        edges.sort((a, b) => {
           return b[0] - a[0] ; 
        });
        
        // common traversal
        let  p = 0 ;
        for(const [w, u, v] of edges){
            let s1 = s.find(u);
            let s2 = s.find(v);

            if( w !== 3){
                break;
            }
            if( s1 !== s2){
                s.union(s1, s2);
                count++;
            }
            p++;
        }
        edges.splice(0,p);
        let type1 = new DSU(n+1);
        type1.parent = [...s.parent] ;
        type1.rank = [...s.rank] ;

        let type2 = new DSU(n+1);
        type2.parent = [...s.parent] ;
        type2.rank = [...s.rank] ;

        let typeOneCount = 0 ;
        let q = 0 ;
        // Alice or type 2 traversal
        for(const [w, u, v] of edges){
            let s1 = type1.find(u);
            let s2 = type1.find(v);
            
            if( w !== 2){
                break;
            }
            if( s1 !== s2){
                type1.union(s1, s2);
                typeOneCount++;
            }
            q++;
        }
        edges.splice(0,q);
        let typeTwoCount = 0 ;
        let r = 0 ;
        // Bob or type 1 traversal
        for(const [w, u, v] of edges){
            let s1 = type2.find(u);
            let s2 = type2.find(v);

            if( s1 !== s2){
                type2.union(s1, s2);
                typeTwoCount++;
            }
            r++;
        }
        
        // check for -1 case
        let disconTypeOne = 0 ;
        let disconTypeTwo = 0 ;
        type1.parent.forEach((element)=>{
            if(element === -1){
                disconTypeOne++;
            }
        });
        type2.parent.forEach((element)=>{
            if(element === -1){
                disconTypeTwo++;
            }
        });

        if(disconTypeTwo > 2 || disconTypeOne > 2){
            return -1;
        }
        edges.splice(0,r);
        
        ans = total - (count + typeOneCount + typeTwoCount );
        
        return ans;
    }
}

let  n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]] ;
// let n = 4, edges = [[3,1,2],[3,2,3],[1,1,4],[2,1,4]];
// let n = 4, edges = [[3,2,3],[1,1,2],[2,3,4]] ;
// let n = 12 ;
// let edges = [[3,1,2],[2,2,3],[3,1,4],[2,3,5],[1,2,6],[2,4,7],[3,3,8],[3,2,9],[2,1,10],[2,1,11],[1,11,12],[1,10,11],[2,5,9],[2,7,10],[2,4,12],[3,9,10],[1,6,9],[2,10,12],[1,2,5],[3,5,6],[1,7,11],[1,8,9],[1,1,11],[3,4,5],[1,5,9],[2,4,9],[1,8,11],[3,6,8],[1,8,10],[2,2,4],[2,3,8],[3,2,6],[3,10,11],[2,3,11],[3,5,9],[3,3,5],[2,6,11],[3,2,7],[1,5,11],[1,1,5],[2,9,10],[1,6,7],[3,2,3],[2,8,9],[3,2,8]] ;
let ans = maxNumEdgesToRemove(n, edges);
console.log(ans);