const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20
class Diameter {
    height(root){
        if(!root){
            return 0;
        }
        return 1 + Math.max(this.height(root.left), this.height(root.right));
    }

    diameter(root){
         if(!root){
             return 0;
         }
         else{
             let lHeight = this.height(root.left);
             let rHeight = this.height(root.right);
             let lDiameter = this.diameter(root.left);
             let rDiameter = this.diameter(root.right);
             return Math.max(lHeight + rHeight + 1,  Math.max(lDiameter, rDiameter));
         }
    }
}

const traversal = new Diameter();
let x = traversal.diameter(root);
console.log(x, '---------');