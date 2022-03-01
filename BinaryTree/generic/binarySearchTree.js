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
    sumOfLeaves(root){
        if(root === null){
            return 0;
        }
        if(root.left === null && root.right === null){
            return root.value;
        }
        return this.sumOfLeaves(root.left) + this.sumOfLeaves(root.right);
    }
    
}
function minValue(root) {
   
    if (root.left === null) {
        return root.value;
    }
    //your code here
    
    let current = minValue(root.left);
    return current;
}

function find(root, value) {
   
    if (root === null) {
        return false;
    }
    if(root.value === value){
        return true;
    }
    else if(value < root.value){
        return find(root.left, value);
    }
    else if(value > root.value){
        return find(root.right, value);
    }
    return false;
}

let tree = new BinarySearchTree();
let arr = [15, 10, 18, 8, 12, 16, 20];
arr.forEach((element) => {
    tree.insert(element);
});
// console.log(tree.find(18));
let root = tree.getRoot();
console.log(minValue(root));
console.log(' sum of leave nodes is : ',tree.sumOfLeaves(root));
console.log(' Searching element is 16 : ',find(root, 16));
//        15
//    10       18
// 8     12  16    20
