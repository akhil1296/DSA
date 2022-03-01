class Solution {
    countDistinct(A, n, k){
        // code here
        let res = [];
        let map = new Map();
        const set = new Set();
        for(let i = 0 ; i < k ; i++){
            map = this.frequencyCounter(A[i], map);
        }
        console.log(map);
        res.push(map.size);
        for(let i = k ; i < n ; i++){
            map = this.decrease(A[i-k], map);
            map = this.frequencyCounter(A[i], map);
            res.push(map.size);
            console.log(map);
        }
         return res;
    }
    frequencyCounter(element, map){
     if(!map.has(element)){
         map.set(element, 1);
     }   
     else{
         let x = map.get(element);
         map.set(element, x + 1);
     }
     return map;
    }
    decrease(element, map){
        let x = map.get(element);
        map.set(element, x - 1);
        if(map.get(element) === 0){
            map.delete(element);
        }
        return map;
    }
}

const x =  new Solution();
let A = [1,2,1,3,4,2,3];

let y = x.countDistinct(A, 7, 4);
console.log(y);