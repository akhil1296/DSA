const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20
class LCA {
     recursive(root, n1, n2){
         if(!root){
             return;
         }
         if(root.data > n1 && root.data > n2){  
             return this.recursive(root.left, n1, n2);
         }
         else if(root.data < n1 && root.data < n2){
             return this.recursive(root.right, n1, n2);
         }
         return root.data;
     }
}

const traversal = new LCA();
let x = traversal.recursive(root, 20, 8);
console.log(x, '---------');
