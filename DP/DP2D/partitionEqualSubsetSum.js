/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(arr) {
    let sum = 0 ;
    let n = arr.length;
        for(let i = 0 ; i < n ; i++){
            sum = sum + arr[i];
        }
        if(sum % 2 !== 0){
            return false;
        }
        
        let dp = new Array(n + 1).fill(-1).map(()=>new Array(sum + 1).fill(-1));
        return subsetSum(arr, n , sum / 2, dp);
};

function subsetSum(arr, n , sum, dp){
        if(sum === 0){
            return 1;
        }
        if(n <= 0){
            return 0;
        }
        if(dp[n][sum] !== -1){
            return dp[n][sum];
        }
        let include = subsetSum(arr, n - 1, sum - arr[n-1], dp);
        let exclude = subsetSum(arr, n - 1, sum, dp);
        
        dp[n][sum] = include || exclude;
        return dp[n][sum];   
    }