const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20
class MaximumDepth {
 
    recursive(root){
        if(!root){
            return false;
        }
        if(!root.left || !root.right){
            return this.recursive(root.left) + this.recursive(root.right) + 1;
        }
        let left = this.recursive(root.left) + 1;
        let right = this.recursive(root.right) + 1;
        return left > right ? left :right;
    }
}

const traversal = new MaximumDepth();
root.left.left.left = 34;
let max1 = traversal.recursive(root);
console.log(max1);
console.log('---------');
