const { PreorderBuild } = require('./preOrderBuild');

let order = [1, 2, 4, -1, -1, 5, 7, -1, -1, -1, 3, -1, 6, -1, -1];
const obj = new PreorderBuild(order);
let root = obj.makeTree(order);

class HeightBalanced {
    isBalanced(root){
        let pair = {};
        if(!root){
            pair.height = 0 ;
            pair.balanced = true ;
            return pair;
        }
        let left = this.isBalanced(root.left);
        let right = this.isBalanced(root.right);

        let H = 1 + Math.max(left.height, right.height);
        pair.height = H ;
        pair.balanced = false ;

        if( left.balanced && right.balanced && Math.abs((left.height - right.height)) <= 1 ){
            pair.balanced = true ;
        }
        return pair ;
    }
 
}

const obj1 = new HeightBalanced();
let ans = obj1.isBalanced(root);
console.log('is height balanced ',ans);
