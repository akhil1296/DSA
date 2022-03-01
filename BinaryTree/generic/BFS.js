class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(root, value) {
        if (!root) {
            root = new Node(value);
            this.root = root;
            return root;
        }
        if (value < root.value) {
            root.left = this.insert(root.left, value);
        }
        else if (value > root.value) {
            root.right = this.insert(root.right, value);
        }
        this.root = root;
        return root;
    }

    getRoot() {
        return this.root;
    }

}
// Height of a tree
const height = (root) => {
    if (root === null) {
        return 0;
    }
    // else {
    //     let lHeight = height(root.left);
    //     let rHeight = height(root.right);
    //     if (lHeight > rHeight) {
    //         return lHeight + 1;
    //     }
    //     else {
    //         return rHeight + 1;
    //     }   
    // }
    return 1 + Math.max(height(root.left), height(root.right));
};
const print = (root) => {
    let totalHeight = height(root);
    console.log("Height : ", totalHeight);
    for (let i = 1; i <= totalHeight; i++) {
        printBFS(root, i);
    }
};
// BFS Or Level Order Traversal
const printBFS = (root, level) => {
    if (root === null) {
        return;
    }
    if (level === 1) {
        console.log(root.value);
    }
    else if (level > 1) {
        printBFS(root.left, level - 1);
        printBFS(root.right, level - 1);
    }
};
let tree = new BinarySearchTree();
let root = tree.getRoot();
let arr = [15, 10, 18, 8, 12, 16, 20];
arr.forEach((element) => {
    root = tree.insert(root, element);
});
print(tree.getRoot());
console.log('height : ', height(root));
//        15
//    10       18
// 8     12  16    20

