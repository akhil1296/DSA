const tree = require('./basicBinaryTree');
const mirrorTree = require('./mirrorOfTree');
const root = tree.mainFunction();
const mirror = mirrorTree.mainFunction();

               //       15
              //    10       18
             // 8     12  16    20

class CheckMirror {
    mirrorCheck(root1, root2){
         if(!root1 && !root2){
             return true;
         }
         if(!root1 || !root2){
             return false;
         }
         if(root1.data !== root2.data){
             return false;
         }
         return this.mirrorCheck(root1.left, root2.right) && this.mirrorCheck(root1.right, root2.left);
    }
}

const traversal = new CheckMirror();
let x = traversal.mirrorCheck(root, mirror);
console.log(x, '---------');
