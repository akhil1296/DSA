const { PreorderBuild } = require('./preOrderBuild');

let order = [1, 2, 4, -1, -1, 5, 7, -1, -1, -1, 3, -1, 6, -1, -1];
const obj = new PreorderBuild(order);
let root = obj.makeTree(order);

class Pair{
    constructor(hd, node, depth){
        this.hd = hd ;
        this.node = node ;
        this.depth = depth ;
    }
}
class Solution
{
    //Function to return a list containing the bottom view of the given tree.
    bottomView(root)
    {
        //your code here
       
        this.min = 0 ;
        this.max = 0 ;
        this.map = new Map();
        this.helper(root, 0, 0);
        let res = [];
        for(let i = this.min ; i <= this.max ; i++){
            let arr = this.map.get(i);
            res.push(arr[0][0]);
        }
         
       return res;
    }
    helper(root, level, depth){
        let q = [];
        q.push(new Pair(level, root, depth));
        
        while(q.length > 0){
            let parent = q.shift();
            let hd = parent.hd;
            let node = parent.node;
            let currDepth = parent.depth;
            
            if(!this.map.has(hd)){
              let arr = [[0, 0]];
                 arr[0][1] = currDepth;
                 arr[0][0] = node.data;
                this.map.set(hd, arr);
            }else{
                let arr = this.map.get(hd);
                if(arr[0][1] < currDepth){
                    arr[0][1] = currDepth;
                    arr[0][0] = node.data;
                }
                
                this.map.set(hd, arr);
            }
            if(node.left){
                q.push(new Pair(hd - 1, node.left, currDepth + 1));
            }
            if(node.right){
                q.push(new Pair(hd + 1, node.right, currDepth + 1));
            }
            if(this.min > hd){
                this.min = hd;
            }
            if(this.max < hd){
                this.max = hd;
            }
        }
    }
}
const obj1 = new Solution();
console.log(obj1.bottomView(root));