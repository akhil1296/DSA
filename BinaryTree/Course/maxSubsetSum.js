const { PreorderBuild } = require('./preOrderBuild');

let order = [1, 2, 4, -1, -1, 5, 7, -1, -1, -1, 3, -1, 6, -1, -1];
const obj = new PreorderBuild(order);
let root = obj.makeTree(order);

class MaxSubsetSum {
    maxSum(root) {
        let pair = {};
        if(!root){
            pair.include = pair.exclude = 0 ;
            return pair ;
        }
        let left = this.maxSum(root.left);
        let right = this.maxSum(root.right);
        
        pair.include = root.data + left.exclude + right.exclude ;
        pair.exclude = Math.max(left.include, left.exclude) + Math.max(right.include, right.exclude);

        return pair ;
    }

}

const obj1 = new MaxSubsetSum();
let ans = obj1.maxSum(root);
console.log('max subset sum', ans);
