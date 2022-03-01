class LongestCommonSubsequence {
    constructor(n1, n2){
        this.dp = new Array(n1).fill(-1).map(()=>new Array(n2).fill(-1));
    }
    topDown(s1, s2, i, j){
        // base case
        if(i === s1.length || j === s2.length){
            return 0 ;
        }
        // check if already state is computed
        if(this.dp[i][j] !== -1){
            return this.dp[i][j];
        }
        // rec
        if(s1.charAt(i) === s2.charAt(j)){
            return this.dp[i][j] = 1 + this.topDown(s1, s2, i+1, j+1);
        }
        let op1 = this.topDown(s1, s2, i+1, j);
        let op2 = this.topDown(s1, s2, i, j+1);
        return this.dp[i][j] = Math.max(op1, op2);
    }
    show(s1, i, j){
        let res = [] ;
        while(i !==0 && j !== 0){
            if(this.dp[i][j] === this.dp[i][j-1]){
                j--;
            }
            else if(this.dp[i][j] === this.dp[i-1][j]){
                i--;
            }
            else{
                res.unshift(s1[i-1]);
                i--; j--;
            }
        }
        console.log(res.toString());
    }
    bottomUp(s1, s2, n1, n2){
        this.dp = new Array(n1+1).fill(0).map(()=>new Array(n2+1).fill(0));

        for( let i = 1 ; i < n1 + 1 ; i++){
            for( let  j = 1 ; j < n2 + 1 ; j++){
                if(s1.charAt(i-1) === s2.charAt(j-1)){
                    this.dp[i][j] = 1 + this.dp[i-1][j-1] ;
                }
                else{
                    this.dp[i][j] = Math.max( this.dp[i][j-1], this.dp[i-1][j]) ;
                }
            }
        }
    return this.dp[n1][n2];
    }

}


let s1 = "ABCD"
let s2 = "ABEDG";
let n1 = s1.length;
let n2 = s2.length;
const obj = new LongestCommonSubsequence(n1, n2);
let ans = obj.topDown(s1, s2, 0, 0);
console.log(ans);
ans = obj.bottomUp(s1, s2, n1, n2);
console.log(ans);
obj.show(s1, n1, n2);

