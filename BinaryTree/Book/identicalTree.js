const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20

class IdenticalTree {
    identical(root1, root2){
        if(!root1 && !root2){
            return true;
        }
        if( (!root2) || (!root1) ){
            return false;
        }
        return (root1.data === root2.data) && (this.identical(root1.left, root2.left)) 
        && (this.identical(root1.right, root2.right)); 
    }
     
}

const traversal = new IdenticalTree();
let x = traversal.identical(root, root);
console.log(x, ', ---------');
