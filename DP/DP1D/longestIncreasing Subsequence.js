class LongestIncreasingSubsequence{
    constructor(n){
        this.dp = new Array(n).fill(1) ;
    }
    
    bottomUp(arr, n){ 
       let res = 1 ;
        for(let i = 0 ; i < n ; i++){
            for(let j = 0 ; j < i ; j++){
                if( arr[i] > arr[j]){
                    this.dp[i] = Math.max(this.dp[i],  1 + this.dp[j]);
                    res = Math.max(res, this.dp[i]) ;
                }
            }
        }
        return res ;
    }
}


let arr = [50, 4, 10, 8, 30, 100];
let n = arr.length ;
const obj = new LongestIncreasingSubsequence(n);
let ans = obj.bottomUp(arr, n);
console.log(ans);

