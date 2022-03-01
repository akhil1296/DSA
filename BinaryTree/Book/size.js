const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20
class Size {
    
    recursive(root){
         if(!root){
             return 0;
         }
         return this.recursive(root.left) + 1 + this.recursive(root.right);
    }

    iterative(root){
      let queue = [];
      let count = 0;
      queue.push(root);
      while(queue.length > 0){
          let temp = queue.shift();
          count++;
          if(temp.left){
              queue.push(temp.left);
          }
          if(temp.right){
            queue.push(temp.right);
        }
      }
      return count;   
    }
}

const traversal = new Size();
let size1 = traversal.recursive(root);
console.log(size1);
console.log('---------');
let size2 = traversal.iterative(root);
console.log(size2);