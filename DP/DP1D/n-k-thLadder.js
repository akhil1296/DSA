class NKthLadder{
    constructor(n){
        this.dp = new Array(n+1).fill(0);
    }
    // O( N * K)
    topDown(n, k){
        if( n < 0){
            return 0 ;
        }
        if( n === 0){ // means we are at the ground level
            return 1 ;
        }
        if( this.dp[n] !== 0 ){
            return this.dp[n]; 
        }
        // jump
        for(let i = 1 ; i <= k ; i++){
            this.dp[n] += this.bottumUp( n - i, k) ;
        }
        return this.dp[n] ;
    }
    // O( N * K)
    bottumUp(n, k){
        this.dp = new Array(n+1).fill(0);
        this.dp[0] = 1 ;

        for(let i = 1 ; i <= n ; i++ ){
            for(let j = 1 ; j <= k ; j++){
               if( i-j >= 0){
                   this.dp[i] += this.dp[ i - j ] ;
               }
            }
        }
        console.log(this.dp);
        return this.dp[n];
    }
    // Bottom Up optimised
    optimised(n, k){
        this.dp[0] = this.dp[1] = 1 ;
        
        // i <= k part
        for(let i = 2 ; i <= k ; i++ ){
            this.dp[i] = 2 * this.dp[i-1] ;
        }
        // i > k part
        for(let i = k+1 ; i <= n ; i++ ){
            this.dp[i] = 2 * this.dp[i-1] - this.dp[i - k - 1] ;
        }
        return this.dp[n] ;
    }

    
}

let n = 4 ; // Need to go to step 4
let k = 3 ; // maximun number of steps that we can take in 1 turn

const obj = new NKthLadder(n);
let ans = obj.bottumUp(n, k);
console.log("Bottom Up : ", ans);
ans = obj.topDown(n, k);
console.log("Top Down : ", ans);
ans = obj.optimised(n, k);
console.log("Optimised Bottom up : ", ans);

/**
 * so n = 4 and k = 3
 * at n = 4 we have possible jump from k = 3, 2 , 1 (0->3 = 3) + (3->4 = 1) = 4 + 3
 * at n = 3 from k = 2 , 1 , 0 - > (0 -> 2 = 2) + (2->3 = 1) + (0->3) = 3 + 1 = 4
 * at n = 2 from k = 1, 0 --> (0 -> 1 = 1 ) + (1 -> 2 = 1) = 2
 * at n = 1 from k = 0   --> 1
 * at n = 0 from k = 0  --> 1 
 * dp = [1, 1, 2, 4, __]
 * dp[n] = dp[n-1] - dp[n - (k+1)] + dp[n-1] ;
 * dp[4] = 2 * dp[3] - dp[0] = 7
 * dp[0] = dp[1] = 1 ;
 * for i <= k part
 * dp[i] = 2 * dp[i-1] ;
 * for k+1 ->= n part
 *  dp[n] = dp[n-1] - dp[n - (k+1)] + dp[n-1] ;
 * return dp[n] ;
 */