class Solution {
    
    isSubsetSum(arr,n,sum){
          //code here
          // base cases
          let dp = new Array(n+1).fill(-1).map(()=> new Array(sum+1).fill(-1));
          return this.subsetSum(arr, n, sum, dp);
    }
    subsetSum(arr, n, sum, dp){
        if(sum === 0){
            return 1;
        }
        if(n <= 0){
            return 0;
        }
        
        if(dp[n-1][sum] !== -1){
            return dp[n-1][sum];
        }
        
        let inc = this.subsetSum(arr, n - 1, sum - arr[n-1], dp);
        let exc = this.subsetSum(arr, n - 1, sum, dp);
       
        dp[n-1][sum] = inc || exc ;
        
        return dp[n-1][sum];
    }
  }