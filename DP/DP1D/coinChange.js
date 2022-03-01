class CoinChange{
    constructor(m){
        this.dp2 = new Array(m+1).fill(0) ;
        this.dp2[0] = 0 ;
    }
    bottomUp(m, coins){ // Time, Space O(n)
    
        for(let i = 1 ; i <= m ; i++){
            this.dp2[i] = Number.MAX_VALUE ;
            coins.forEach(coin => {
                let val = i - coin ;
                if(val >= 0 && this.dp2[val] !== Number.MAX_VALUE){
                    this.dp2[i] = Math.min(this.dp2[i], this.dp2[val] + 1) ;
                }
            });
        }
        return this.dp2[m] ;
    }
    topDown(m, coins){ // Time, Space O(m * coins.length)
        this.dp = new Array(m+1).fill(0) ;
        this.dp[0] = 0 ;
    
        for(let i = 1 ; i <= m ; i++){
            let min = Number.MAX_VALUE ;
            coins.forEach(coin => {

                let val = i - coin ;
                if(val >= 0){
                    min = Math.min(min, this.dp[val]);
                }
            });
            this.dp[i] = min + 1;
        }
       console.log(this.dp);
       return this.dp[m] ;
    }

}

// let m = 15 ;
// let coins = [1, 3, 7, 10];
let m = 30 ;
let coins = [25, 10, 5] ;
const obj = new CoinChange(m);
let ans = obj.bottomUp(m, coins);
console.log("Bottom Up : ", ans);
ans = obj.topDown(m, coins);
console.log("Top Down : ", ans);
