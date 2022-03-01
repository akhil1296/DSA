class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BuildTree {
    constructor() {
        this.root = {};
    }
    buildTree(arr) {
        let  n = arr.length ;
        let root = new Node(arr[0]);
        let q = [];
        q.push(root);

        let i = 1;
        while (q.length) {
            let parent = q.shift();

            if (i+1 < n) {
                let c1 = arr[i]; let c2 = arr[i + 1]; i = i + 2;
                if (c1 !== - 1) {
                    parent.left = new Node(c1);
                    q.push(parent.left);
                }
                if (c2 !== - 1) {
                    parent.right = new Node(c2);
                    q.push(parent.right);
                }
            }
        }
        return root;
    }
}

let order = [1, 2, 3, 4, 5, -1, 6, -1, -1, 7, -1, -1, -1, -1, -1];

const obj = new BuildTree(order);
let root = obj.buildTree(order);
console.log(root);