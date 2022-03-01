class SubsequenceCount {

    topDown(s1, s2, m, n) {
        // base case
        if ((m === -1 && n === -1) || n === -1) {
            return 1;
        }
        if (m === -1) {
            return 0;
        }
        // rec case
        if (s1.charAt(m) === s2.charAt(n)) {
            return this.topDown(s1, s2, m - 1, n - 1) + this.topDown(s1, s2, m - 1, n);
        }
        return this.topDown(s1, s2, m - 1, n);
    }

    bottomUp(s1, s2) {
        let m = s1.length;
        let n = s2.length;
        let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
        for (let i = 0; i < m; i++) {
            dp[i][0] = 1;
        }
        for (let i = 1; i < m + 1; i++) {
            for (let j = 1; j < n + 1; j++) {
                if(s1.charAt(i) === s2.charAt(j)){
                    dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
                }
                else{
                    dp[i][j] = dp[i-1][j] ;
                }
            }
        }
        return dp[m][n];
    }

}


let s1 = "ABCDCE";
let s2 = "ABC";
let m = s1.length;
let n = s2.length;
const obj = new SubsequenceCount();
let ans = obj.topDown(s1, s2, m, n);
console.log(ans);
ans = obj.bottomUp(s1, s2);
console.log(ans);

