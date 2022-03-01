const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20

class DeepestNode {
    deep(root){
       let queue = [];
       queue.push(root);
       let temp = root.data;
       while(queue.length > 0){
           temp = queue.shift();
           if(temp.left){
               queue.push(temp.left);
           }
           if(temp.right){
            queue.push(temp.right);
        }
       }
       console.log("Deepest Node ", temp);
    }
     
}

const traversal = new DeepestNode();
traversal.deep(root);
console.log('---------');
