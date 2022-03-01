class Pair{
    constructor(hd, node){
        this.hd = hd;
        this.node = node;
    }
}
class Solution
{
    //Function to return a list of nodes visible from the top view 
    //from left to right in Binary Tree.
    topView(root)
    {   this.min = 0;
        this.max = 0;
        //your code here
        this.map = new Map();
        this.helper(root, 0);
        let res = [];
        for(let i = this.min ; i <= this.max ; i++){
            let arr = this.map.get(i);
            res.push(arr[0]);
        }

        return res;
    }
    helper(root, level){
        let q = [];
        q.push(new Pair(level, root));
        
        while(q.length > 0){
            let parent = q.shift();
            let hd = parent.hd;
            let node = parent.node;
            
            if(!this.map.has(hd)){
                let arr = [];
                arr.push(node.data);
                this.map.set(hd, arr);
            }else{
                let arr = this.map.get(hd);
                arr.push(node.data);
                this.map.set(hd, arr);
            }
            if(node.left){
                q.push(new Pair(hd -1, node.left));
            }
            if(node.right){
                q.push(new Pair(hd + 1, node.right));
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