class FrogMinCost2{
    constructor(n, arr){
        this.arr = arr ;
        this.dp = new Array(n).fill(0) ;
    }
    
    bottomUp(arr, k){ 
        this.dp[1] = Math.abs(arr[1] - arr[0]);
        for(let i = 2 ; i < n ; i++){
            
            let op1 = this.dp[i-1] + Math.abs(arr[i] - arr[i-1]);
            let op2 = this.dp[i-2] + Math.abs(arr[i] - arr[i-2]);
            this.dp[i] = Math.min(op1, op2);
        }
        return this.dp[n-1];
    }
}

let k = 3 ;
let arr = [10, 30, 40, 50, 20];
let n = arr.length ;
const obj = new FrogMinCost2(n);
let ans = obj.bottomUp(arr, k);
console.log(ans);

