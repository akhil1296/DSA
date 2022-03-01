class DisjointSet {
    constructor() {
        this.parent = [];
        this.rank = [];
    }
    makeSet(set) {
        for (let i = 0; i < set.length; i++) {
            this.parent[i] = i ;
            this.rank[i] = 0;
        }
    }
    findAbsolteRoot(x) {
         if(this.parent[x] !== x){
             this.parent[x] = this.findAbsolteRoot(this.parent[x]);
         }
         return this.parent[x];
    }
    union(x, y) {
         let xRoot =  this.findAbsolteRoot(x);
         let yRoot = this.findAbsolteRoot(y);
         if(xRoot === yRoot){
             return;
         }
         if(this.rank[xRoot] < this.rank[yRoot]){
             this.parent[xRoot] = yRoot;
         }
         else if(this.rank[xRoot] > this.rank[yRoot]){
            this.parent[yRoot] = xRoot;
        }
        else{
            this.parent[yRoot] = xRoot;
            this.rank[xRoot] ++;
        }
    }
    /**
     * 
     * find(a,x){
        //add code here
        return a[a[x]] === a[x]?a[x] : this.find(a,a[x]);
    }

    unionSet(a,x,z){
        //add code here
       a[this.find(a,x)]=this.find(a,z);
        
    }
     */
    checkFriends(x, y){
        let a =  this.findAbsolteRoot(x);
        let b = this.findAbsolteRoot(y);
        if(a === b){
            console.log(`Yes, ${x} and ${y} are friends`);
        }
        else{
            console.log(`No, ${x} and ${y} are not friends`);
        }
    }
    showParent() {
        console.log(this.parent);
        console.log(this.rank);
    }
}

const obj = new DisjointSet();

 
let set1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

obj.makeSet(set1);
obj.union(2, 3);
obj.union(4, 3);
obj.union(4, 5);
obj.showParent();
obj.checkFriends(2,4);
obj.checkFriends(2,5);
obj.checkFriends(2,7);
