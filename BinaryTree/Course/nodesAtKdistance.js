const { PreorderBuild } = require('./preOrderBuild');

let order = [1, 2, 4, -1, -1, 5, 7, -1, -1, -1, 3, -1, 6, -1, -1]; //  [1, 2, 4, -1, -1, 5, 7, 8, 9, 10, 3, -1, 6, -1, -1];
// let order = [1, 2, 4, -1, -1, 5, 7, 8, 9, 10, 3, -1, 6, -1, -1];
const obj = new PreorderBuild(order);
let root = obj.makeTree(order);

class NodesAtDistanceK {
    printAtlevelK(root, level) {
        if (!root || level < 0) {
            return;
        }
        if (level === 0) {
            console.log(root.data);
            return;
        }
        this.printAtlevelK(root.left, level - 1);
        this.printAtlevelK(root.right, level - 1);
        return;
    }
    nodesAtKdistance(root, target, k) {
        if (!root) {
            return -1;
        }
        if (root === target) {
            this.printAtlevelK(root, k);
            return 0;
        }

        let LD = this.nodesAtKdistance(root.left, target, k);

        if (LD !== -1) {
            if (LD + 1 === k) {
                console.log(root.data);
            } else {
                // print nodes in right subtree
                this.printAtlevelK(root.right, k - 2 - LD);
            }
            return 1 + LD;
        }

        let RD = this.nodesAtKdistance(root.right, target, k);

        if (RD !== -1) {
            if (RD + 1 === k) {
                console.log(root.data);
            } else {
                // print nodes in LEFT subtree
                this.printAtlevelK(root.left, k - 2 - RD);
            }
            return 1 + RD;
        }
        return - 1;
    }
}
let k = 2;
let target = root.left.right ;
const obj1 = new NodesAtDistanceK();
let ans = obj1.nodesAtKdistance(root, target, k);
console.log(ans);