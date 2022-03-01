class Solution{
    distributeCandies(n, k){
        //code here
        let ar = [];
        for(let i = 0 ; i < k ; i++){
            ar[i] = 0;
        }
        let t = 1 ;
        let j = 0 ;
        while(n !== 0){
            ar[j] = ar[j] + t ;
            n = n - t ;
            j++ ; t++;
            
            if( j >= k){
                j = 0 ;
            }
            if(t >= n){
                t = n ;
            }
        }
        
        return ar;
    }
}

const x = new Solution();
let res = x.distributeCandies(10, 3);
console.log(res);