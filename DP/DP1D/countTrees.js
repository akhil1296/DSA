class countBST {
    constructor(n) {
        this.dp = new Array(n+1).fill(0);
    }

    bottomUp(n) {
      
        this.dp[0] = this.dp[1] = 1 ;
        
        for(let i = 2 ; i <= n ; i++){
            let res = 0 ;
            for(let j = 1 ; j <= i ; j++){
                res = res + this.dp[j-1] * this.dp[i-j] ;
            }   
            this.dp[i] += res ; 
        }
        console.log(this.dp);
        return this.dp[n];
    }
}



let n = 12;
const obj = new countBST(n);
let ans = obj.bottomUp(n);
console.log(ans);

