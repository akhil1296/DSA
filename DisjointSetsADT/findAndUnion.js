class DisjointSet {
    constructor() {
        this.parent = [];
    }
    makeSet(set) {
        for (let i = 0; i < set.length; i++) {
            this.parent[i] = i ;
        }
    }
    findAbsolteRoot(i) {
        if(this.parent[i] !== i){
            return this.findAbsolteRoot(this.parent[i]);
        }
        return i;
    }
    union(x, y) {
        let a = this.findAbsolteRoot(x);
        let b = this.findAbsolteRoot(y);
        this.parent[b] = a;
    }
    checkFriends(x, y){
        let a = this.findAbsolteRoot(x);
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
