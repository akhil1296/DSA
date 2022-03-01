const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20

class LevelWithMaximumSum {
   getHeight(root){
       if(!root){
           return 0;
       }
       return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
   }
   maxSum(root){
    let height = this.getHeight(root);
    let maximumSum = Number.MIN_VALUE;
    for(let i = 1 ; i <= height ; i++ ){
        let sum = this.bfs(root, i);
        maximumSum = Math.max(sum, maximumSum);
    }
    return maximumSum;
   }
   
   bfs(root, level){
       if(!root){
           return;
       }
       if(level === 1){
           return root.data;
       }
       else{
           let x = this.bfs(root.left, level - 1);
           let y = this.bfs(root.right, level - 1);
           return x + y;
       }
   }
     
}

const traversal = new LevelWithMaximumSum();
let max = traversal.maxSum(root);
console.log(max, '---------');
