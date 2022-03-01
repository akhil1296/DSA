class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class CreateBST {
    make(root, arr) {
        arr.forEach(element => {
            root = this.insert(root, element);
        });
        console.log(root);
        let ans = this.search(root, 10);
        console.log(ans);
    }
    insert(root, element) {
        if (!root) {
            root = new Node(element);
            return root;
        }
        if (element < root.data) {
            root.left = this.insert(root.left, element);
        } else if (element > root.data) {
            root.right = this.insert(root.right, element);
        }
        return root;
    }
    search(root, element) {
        if (!root) {
            return false;
        }
        if (element === root.data) {
            return true;
        }
        else if (element < root.data) {
            return this.search(root.left, element);
        } else {
            return this.search(root.right, element);
        }
    }
}

let arr = [8, 3, 10, 1, 6, 14, 9];
let root = null;

const obj = new CreateBST();
obj.make(root, arr);
