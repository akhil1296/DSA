const { PreorderBuild } = require('./preOrderBuild');

let order = [1, 2, 4, -1, -1, 5, 7, -1, -1, -1, 3, -1, 6, -1, -1];
const obj = new PreorderBuild(order);
let root = obj.makeTree(order);

class Pair{
    constructor(hd, node){
        this.hd = hd;
        this.node = node;
    }
}
class VerticalOrder 
{
    //Function to find the vertical order traversal of Binary Tree.
    verticalOrder(root)
    {   
        this.min = 0 ;
        this.max = 0 ;
        this.map = new Map();
        
        this.helper(root, 0);
        
        let res = [];
         
        for(let i = this.min ; i <= this.max ; i++){
            let prr = this.map.get(i);
            for(let k = 0 ; k < prr.length ; k++){
                 res.push(prr[k]);
            }
        }
        return res;
    }
    helper(root, level){
    
        let q = [];
        q.push(new Pair(level, root));
        // bfs traversal
        console.log('s',q);
        while(q.length){
            let parent = q.shift();
            let hd = parent.hd;
            let node  = parent.node;
            
            if(!this.map.has(hd)){
                let arr = [];
                arr.push(node.data);
                this.map.set(hd, arr);
            }else{
                let arr = this.map.get(hd);
                arr.push(node.data);
                this.map.set(hd, arr);
            }
            
            // pushing the left and right in q
            if(node.left){
                q.push(new Pair(hd - 1, node.left));
            }
            if(node.right){
                q.push(new Pair(hd + 1, node.right));
            }
            if(this.min > hd){ // negative level
                this.min = hd;
            }
            if(this.max < hd){
                this.max = hd;
            }
        }
    }
}
const obj1 = new VerticalOrder();
console.log(obj1.verticalOrder(root));
