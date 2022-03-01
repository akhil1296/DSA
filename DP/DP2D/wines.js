class WinesProblem {
    constructor(n){
        this.dp = new Array(n).fill(-1).map(()=> new Array(n).fill(-1));
    }
    topDown(prices, L, R, y){
       if(L>R){
           return 0 ;
       }
       if(this.dp[L][R] !== -1){
            return this.dp[L][R];
       }
       let pickLeft = y * prices[L] + this.topDown(prices, L+1, R, y+1);
       let pickRight = y * prices[R] + this.topDown(prices, L, R-1, y+1);
       return this.dp[L][R] = Math.max(pickLeft, pickRight);
    }
    show(){
       console.log(this.dp);
    }
    bottomUp(prices, n){
        this.dp = new Array(n+1).fill(0).map(()=> new Array(n+1).fill(0));
        for(let i = n-1 ; i >= 0 ; i--){
            for(let j = 0 ; j < n ; j++){
                if(i === j){
                    this.dp[i][j] = n + prices[i];
                }
                else if( i < j){
                    let y = n - ( j - i) ;
                    let pickLeft = y * prices[i] + this.dp[i+1][j];
                    let pickRight = y * prices[j] + this.dp[i][j+1];
                    this.dp[i][j] = Math.max(pickLeft, pickRight);
                }
            }
        }
        return this.dp[0][n-1];
    }

}


let prices = [2, 3, 5, 1, 4] ;
let n = prices.length;
const obj = new WinesProblem(n);
let ans = obj.topDown(prices, 0, n-1 , 1);
obj.show();
console.log(ans);
obj.bottomUp(prices, n);
console.log(ans);

