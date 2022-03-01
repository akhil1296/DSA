class Fibonicci{
    constructor(n){
        this.dp = new Array(n+1).fill(0) ;
        this.dp[0] = 0 ;
        this.dp[1] = 1 ;
    }
    bottomUp(n){ // Time, Space O(n)
        // base case
        if( n === 0 || n === 1){
            return n ;
        }
        // Already value is stored
        if(this.dp[n] !== 0){
            return this.dp[n] ;
        }
        return this.dp[n] = this.bottomUp(n-1) + this.bottomUp(n-2) ;
    }
    topDown(n){ // Time, Space O(n)
        this.dp2 = new Array(n+1).fill(0) ;
        this.dp2[0] = 0 ;
        this.dp2[1] = 1 ;

        for(let i = 2 ; i <= n ; i++){
            this.dp2[i] = this.dp2[i-1] + this.dp2[i-2] ;
        }
        return this.dp2[n] ;
    }
    // using single variable // Time O(N), Space O(1)
    iterative(n){
        let a = 0 ;
        let b = 1 ;
        let c = a + b ;
        for(let i = 2 ; i <= n ; i++){
            c = a + b ;
            a = b ;
            b = c ;        
        }
        return c ;
    }
}

let n = 5 ;
const obj = new Fibonicci(n);
let ans = obj.bottomUp(n);
console.log("Bottom Up : ", ans);
ans = obj.topDown(n);
console.log("Top Down : ", ans);
ans = obj.iterative(n);
console.log("Iterative : ", ans);


/*
Fibonacci for interview

0 1 1 2 3 5 8 13 ....
fibo[n] = fibo[n-1] + fibo[n-2] ;
function fibo(n){ // O(n) space and complexity
    let dp = new Array(n) ;
    dp[0] = 0 ;
    dp[1] = 1 ;
    for(let i = 2 ; i < n ; i++){
        dp[i] = dp[i-1] + dp[i-2] ;
    }
    return dp[n] ;
}
function fiboOptimized(n){
    let a = 0 ; 
    let b = 1 ;
    let c = a + b ;
    for(let i = 2 ; i <= n ; i++){
        c = a + b ;
        a = b ;
        b = c ;
    } 
    return c ;
}
 n = 7 
 i 2 3 4 5 6 7
 c 1 1 2 3 5 8
 a 0 1 1 2 3 5
 b 1 1 2 3 5 7
*/

