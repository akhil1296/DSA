class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(root,value){
        if(!root){
            root = new Node(value);
            this.root = root;
            return root;
        }
        else{
            let current = root;
            if(value < current.value){
                root.left = this.insert(root.left, value);
            }
            else if(value > current.value){
                root.right = this.insert(root.right, value);
            }
            this.root = root;
            return root;
        }
    }
    getRoot(){
        return this.root;
    }
}

// returns true if given search tree is binary
//      search tree
const isBST = (root) => {
    return isBSTValid(root, Number.MIN_VALUE, Number.MAX_VALUE);
};

const isBSTValid = (node, min, max) => {
    /* an empty tree is BST */
    if(!node){
        return true;
    }
     /* false if this node violates
        the min/max constraints */
    if(node.value < min || node.value > max){
        return false;
    }
    /* otherwise check the subtrees recursively
        tightening the min/max constraints */
        // Allow only distinct values
    return isBSTValid(node.left, min, node.data - 1) && isBSTValid(node.right, node.data + 1, max);
};

let tree = new BST();
let arr = [15, 10, 18, 8, 12, 16, 20];
let root = tree.getRoot();
arr.forEach((element) => {
    root = tree.insert(root, element);
});

let x = isBST(tree.getRoot());
console.log(x);
//        15
//    10       18
// 8     12  16    20