class SubsetSum {
    isSubset(arr, n, sum) {
        // base case
        let dp = new Array(n + 1).fill(0).map(() => new Array(sum).fill(0));

        dp[0][0] = 1;
        for (let i = 1; i <= sum; i++)
            dp[0][i] = 0;
        for (let i = 1; i <= n; i++)
            dp[i][0] = 1;


        for (let i = 1; i < n + 1; i++) {
            for (let j = 1; j <= sum; j++) {
                if (arr[i - 1] > j) {
                    dp[i][j] = dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i - 1][j] + dp[i - 1][j - arr[i - 1]]
                }
            }
        }
        console.log(dp);
        return dp[n][sum];
    }
}

const obj = new SubsetSum();
let arr = [1, 2, 3, 4, 5];
let sum = 6;
let ans = obj.isSubset(arr, arr.length, sum);
console.log(ans);