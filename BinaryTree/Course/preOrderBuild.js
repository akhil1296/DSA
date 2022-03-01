class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class PreorderBuild {
    constructor(ar) {
        this.root = {};
        this.arr = ar;
        this.i = 0;
    }
    makeTree(order) {
        this.len = order.length;
        this.root = this.buildTree();
        // console.log(this.root);
        return this.root;
    }
    buildTree() {
        if (this.i > this.len) {
            return;
        }

        let d = this.arr[this.i++];

        if (d === -1) {
            return null;
        }
        let node = new Node(d);
        node.left = this.buildTree();
        node.right = this.buildTree();
        return node;
    }
    levelOrderTraversal(root) {
        if(!root){
            return [];
        }
        let res = [];
        let q = [] ;
        q.push(root) ;
        q.push(null) ;
        
        let currentLevelRes = [];
        while(q.length){
            let parent = q.shift();
            if(parent === null){
                if(q.length > 0){
                    // means level has finished
                    q.push(null);
                }
                  res.push(currentLevelRes);
                    currentLevelRes = [];
            }
            else{
                currentLevelRes.push(parent.val);
                if(parent.left !== null){
                    q.push(parent.left);
                }
                if(parent.right !== null){
                    q.push(parent.right);
                }
            }
        }
        
        return res;
    }
}

let order = [1, 2, 4, -1, -1, 5, 7, -1, -1, -1, 3, -1, 6, -1, -1];
const obj = new PreorderBuild(order);
let root = obj.makeTree(order);
let ans = obj.levelOrderTraversal(root);
console.log(ans);

module.exports = {
    PreorderBuild,
}