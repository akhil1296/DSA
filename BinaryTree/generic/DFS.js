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
    insert(element) {
        let newNode = new Node(element);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        else {
            let current = this.root;
            while (true) {
                if (element === current.value) {
                    return undefined;
                }
                if (element < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }
                else {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    find(value) {
        if (this.root === null) {
            return false;
        }
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            }
            else if (value > current.value) {
                current = current.right;
            }
            else {
                found = true;
            }
        }
        if (!found) {
            return undefined;
        }
        return current;
    }
    getRoot() {
        return this.root;
    }
}

const inorder = (root) => {
    if(!root){
        return root;
    }
    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
};
const preorder = (root) => {
    if(!root){
        return root;
    }
    console.log(root.value);
    preorder(root.left);
    preorder(root.right);
};
const postorder = (root) => {
    if(!root){
        return root;
    }
    postorder(root.left);
    postorder(root.right);
    console.log(root.value);
};

let tree = new BinarySearchTree();
let arr = [15, 10, 18, 8, 12, 16, 20];
arr.forEach((element) => {
    tree.insert(element);
});
// console.log(tree.find(18));
let root = tree.getRoot();
console.log("Priniting inorder");
inorder(root);
console.log("Priniting preorder");
preorder(root);
console.log("Priniting postorder");
postorder(root);


//        15
//    10       18
// 8     12  16    20
