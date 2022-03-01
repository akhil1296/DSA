const { PreorderBuild } = require('./preOrderBuild');

let order = [1, 2, 4, -1, -1, 5, 7, -1, -1, -1, 3, -1, 6, -1, -1];
const obj = new PreorderBuild(order);
let root = obj.makeTree(order);

class Diameter {

    dia(root) { // O(n^2)
        if (root === null) {
            return 0;
        }
        let d1 = this.height(root.left) + this.height(root.right);
        let d2 = this.dia(root.left);
        let d3 = this.dia(root.right);

        return Math.max(d1, Math.max(d2, d3));
    }
    height(root) {
        if (root === null) {
            return 0;
        }
        return 1 + Math.max(this.height(root.left), this.height(root.right));
    }
    diam(root){
        let pair = {};
        if(root === null){
          pair.height = pair.dia =  0;
          return pair;
        }
        
        let left = this.diam(root.left);
        let right = this.diam(root.right);
        
        pair.height = 1 + Math.max(left.height, right.height);
        let d1 = left.height + right.height ;
        let d2 = left.dia ;
        let d3 = right.dia ;

        pair.dia = Math.max(d1, Math.max(d2, d3));
        
        return pair ;
    }

}
const obj1 = new Diameter();
let ans = obj1.dia(root);
console.log('height',obj1.height(root));
console.log('dia',ans);
let ans2 = obj1.diam(root);
console.log(ans2);