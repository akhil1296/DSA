const { PreorderBuild } = require('./preOrderBuild');

let order = [1, 2, 4, -1, -1, 5, 7, -1, -1, -1, 3, -1, 6, -1, -1];
const obj = new PreorderBuild(order);
let root = obj.makeTree(order);

class VerticalOrder {
    constructor(){
        this.maxLevel = 0 ;
        this.res = [] ;
    }
    show(root){
        this.traverseTree(root, 1);
        console.log(this.res);
    }
    traverseTree(root, level){
        if(!root){
            return ;
        }
        if(level > this.maxLevel){
            this.maxLevel = level ;
            this.res.push(root.data);
        }
        this.traverseTree(root.left, level + 1);
        this.traverseTree(root.right, level + 1);
    }
}
const obj1 = new VerticalOrder();
obj1.show(root);
