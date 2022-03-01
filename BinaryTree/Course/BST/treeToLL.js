const { MinHeightBST } = require('./minHeightBST');
let arr = [1, 2, 3, 5, 6, 7];
const obj = new MinHeightBST();
let root = obj.sortedArrayToBST(arr, 0, arr.length - 1);

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

class TreeToLL {
    treeToLinkedList(root) {
        let l = new LinkedList();
        // base case
        if (!root) {
            l.head = l.tail = null;
            return l;
        }
        // 4 cases
        if (root.left === null && root.right === null) {
            l.head = l.tail = root;
        } else if (root.left !== null && root.right === null) {
            let leftLL = this.treeToLinkedList(root.left);
            leftLL.tail.right = root;
            l.head = leftLL.head;
            l.tail = root;

        }
        else if (root.right !== null && root.left === null) {
            let rightLL = this.treeToLinkedList(root.right);
            root.right = rightLL.head;
            l.head = root;
            l.tail = rightLL.tail;
        }else{
            let leftLL = this.treeToLinkedList(root.left);
            let rightLL = this.treeToLinkedList(root.right);
        
            leftLL.tail.right = root;
            root.right = rightLL.head;
            l.head = leftLL.head;
            l.tail = rightLL.tail;
            
        }
        return l;
    }
}

const obj1 = new TreeToLL();
const ans = obj1.treeToLinkedList(root);
console.log('linked list is -> ', ans);
