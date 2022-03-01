class MaxNonAdjSum{
    constructor(n){
        this.dp = new Array(n).fill(0) ;
    }
    
    bottomUp(arr, n){ 
       this.dp[0] = Math.max(0, arr[0]) ;
       this.dp[1] = Math.max(0, Math.max(arr[0] , arr[1])) ;

       for(let i = 2 ; i < n ; i++){
           this.dp[i] = Math.max(this.dp[i-1], this.dp[i-2] + arr[i]);
       }
    return this.dp[n-1];
    }
}


let arr = [6, 10, 12, 7, 9, 14];
let n = arr.length ;
const obj = new MaxNonAdjSum(n);
let ans = obj.bottomUp(arr, n);
console.log(ans);

