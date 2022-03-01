const { PreorderBuild } = require('./preOrderBuild');

let order = [1, 2, 4, -1, -1, 5, 7, -1, -1, -1, 3, -1, 6, -1, -1];
const obj = new PreorderBuild(order);
let root = obj.makeTree(order);

class DescendentSum {

     makeSum(root){
         // base case
         if(!root){
             return 0 ;
         }
         if(!root.left && !root.right){
             return root.data ;
         }
         let LS = this.makeSum(root.left);
         let RS = this.makeSum(root.right);
         
         let temp = root.data ;
         root.data = LS + RS ;
         return temp + root.data;
     }
     show(){
         console.log(root);
     }

}
const obj1 = new DescendentSum();
let ans = obj1.makeSum(root);
console.log('descendent sum ',ans);
obj1.show();
