class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class MinHeightBST {
    sortedArrayToBST(arr, left, right) {

        if (left > right) {
            return null;
        }

        let mid = Math.floor((left + right) / 2);
        let root = new Node(arr[mid]);

        root.left = this.sortedArrayToBST(arr, left, mid - 1);
        root.right = this.sortedArrayToBST(arr, mid + 1, right);

        return root;
    }

}

let arr = [1, 2, 3, 4, 5, 6, 7];
const obj = new MinHeightBST();
let root = obj.sortedArrayToBST(arr, 0, arr.length - 1);
console.log(root);

module.exports = {
    MinHeightBST
};