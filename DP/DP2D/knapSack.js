class Solution 
{   
    //Function to return max value that can be put in knapsack of capacity W.
    knapSack(W, weights, prices, N)
    { 
      
    let dp = new Array(N+1).fill(-1).map(()=>new Array(W+1).fill(-1));
         return this.helper(W, weights, prices, N, dp);
    }
    helper(W, weights, prices, N, dp){
        if(N === 0 || W === 0){
            return 0;
        }
        if(dp[N][W] !== -1){
            return dp[N][W];
        }
        let include = 0;
        let exclude = 0;
        if(weights[N -1] <= W){
            include = prices[N-1] + this.helper(W - weights[N-1], weights, prices, N - 1, dp);
        }
        exclude = this.helper(W, weights, prices, N - 1, dp);
        dp[N][W] = Math.max(include, exclude);
        
        return dp[N][W];
    }
}

class KnapSack {

    rec(weights, prices, n, w) {
        if (n === 0 || w === 0) {
            return 0;
        }

        let include = 0;
        let exclude = 0;

        if (weights[n - 1] <= w) {
            include = prices[n - 1] + this.rec(weights, prices, n - 1, w - weights[n - 1]);
        }
        exclude = this.rec(weights, prices, n - 1, w);
        return Math.max(include, exclude);
    }
    // O(N* W) // better faster
    bottomUp(weights, prices, N, W) {
        let dp = new Array(N + 1).fill(0).map(() => new Array(W + 1).fill(0));

        for (let n= 1; n <= N; n++) {
            for (let w = 1; w <= W; w++) {
                
                let include = 0;
                let exclude = 0;

                if (weights[n - 1] <= w) {
                    include = prices[n - 1] + dp[n - 1][w - weights[n - 1]];
                }

                exclude = dp[n-1][w] ;
                dp[n][w] = Math.max(include, exclude);
            
            }
        }

        return dp[N][W] ;
    }
}


let capacity = 11;
let n = 4;
let weights = [2, 7, 3, 4];
let prices = [5, 20, 20, 10];

const obj = new KnapSack();
let ans = obj.rec(weights, prices, n, capacity);
console.log(ans);
ans = obj.bottomUp(weights, prices, n, capacity);
console.log(ans);

