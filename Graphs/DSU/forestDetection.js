class ForestDetection{
    constructor(n){
        this.parent = new Array(n).fill(-1);
    }
    find(i){
        if(this.parent[i] === -1){
            return i ;
        }
        return this.find(this.parent[i]);
    }
    union(a, b){
        let s1 = this.find(a);
        let s2 = this.find(b);
        if(s1 !== s2){
            this.parent[s1] = s2 ;
        }
    }
    detection(edges){
        for(const [a, b] of edges){
            let s1 = this.find(a);
            let s2 = this.find(b);
            if(s1 !== s2){
                this.union(s1, s2);
            }
            // go to else part if cycle is there
            else{
                return false;
            }
        }
        return true;
    }
}

let n = 6 ;
let edges = [[0,1],[0,2],[3,4],[4,5]];
const obj = new ForestDetection(n);

let res = obj.detection(edges);
console.log("Forest PResent : ",res);
