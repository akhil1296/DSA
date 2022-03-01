const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20

class CheckSum {
    sumCheck(root, sum){
        if(!root){
            return (sum === 0);
        }
        else{
            let remainingSum = sum - root.data;
            if((root.left && root.right) || (!root.left && !root.right)){
                return this.sumCheck(root.left, remainingSum) || this.sumCheck(root.right, remainingSum); 
            }
            else if(root.left){
                return this.sumCheck(root.left, remainingSum);
            }
            else{
                return this.sumCheck(root.right, remainingSum);
            }
       }
    }
     
}

const traversal = new CheckSum();
let x = traversal.sumCheck(root, 33);
console.log(x, '---------');
