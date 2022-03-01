const { MinHeightBST } = require('./minHeightBST');
let arr = [1, 2, 3, 5, 6, 7];
const obj = new MinHeightBST();
let root = obj.sortedArrayToBST(arr, 0, arr.length - 1);

class InorderSuccessor {
    inSucc(root, target) {
        if (target.right !== null) {
            let temp = target.right;
            while (temp.left !== null) {
                temp = temp.left;
            }
            return temp;
        }
        // otherwise
        let temp = root;
        let succ = null;

        while (temp !== null) {
            if (temp.data > target.data) {
                succ = temp;
                temp = temp.left;
            }
            else if (temp.data < target.data) {
                temp = temp.right;
            }
            else {
                break;
            }
        }
        return succ;

    }
}

let target = root.left;
const obj1 = new InorderSuccessor();

let ans = obj1.inSucc(root, target);
console.log("succ : ", ans.data);

