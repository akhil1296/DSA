const { PreorderBuild } = require('./preOrderBuild');

let order = [1, 2, 4, -1, -1, 5, 7, -1, -1, -1, 3, -1, 6, -1, -1];
const obj = new PreorderBuild(order);
let root = obj.makeTree(order);

class PrintAtKlevel {
    print(root, level) {
        if(!root){
            return ;
        }
        if (level === 0) {
            console.log(root.data);
            return;
        }
        this.print(root.left, level - 1);
        this.print(root.right, level - 1);
        return ;
    }
}

let level = 2;
const obj1 = new PrintAtKlevel();
let ans = obj1.print(root, level);
