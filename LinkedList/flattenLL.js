/*
class Node{
    constructor(data){
        this.data = data;
        this.down = null;
        this.next = null;
    }
}
*/

class Solution {
    
    flatten(head)
    {
        //your code here
        if(head === null || head.next === null){
            return head;
        }
        
        return this.merge(head, this.flatten(head.next));
    }
    merge(a, b){
        if(a === null){
            return b;
        }
        if(b === null){
            return a;
        }
        let c;
        if(a.data < b.data){
            c = a;
            c.down = this.merge(a.down, b);
        }
        else{
            c = b;
            c.down = this.merge(a, b.down);
        }
        return c;
    }
    
}