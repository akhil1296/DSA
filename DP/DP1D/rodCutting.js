class RodCutting{
    constructor(n){
        this.dp = new Array(n+1).fill(0) ;
        this.dp[0] = 0 ;
    }
    recursive(n, price){
        if( n <= 0 ){
            return 0 ;
        } 

        // rec case
        let ans = Number.MIN_VALUE ;
        for(let i = 0 ; i < n ; i++){
            let cut = i + 1 ;
            let res = price[i] + this.recursive(n - cut, price);
            ans = Math.max(ans, res);
        }
        return ans ;
    }
    bottomUp(n, price){ // Time, Space O(N^2)
       
        for(let len = 1; len <= n ; len++){
            let ans = Number.MIN_VALUE ;
            for(let i = 0 ; i < len ; i++){
                let cut = i + 1 ;
                let res = price[i] + this.dp[len - cut] ;
                ans = Math.max(ans, res); 
            }
            this.dp[len] = ans ;
        }
        console.log(this.dp);
        return this.dp[n];
        
       
    }

}
let n =  8 ;
let length = [1, 2, 3, 4, 5, 6, 7, 8] ;
// let price = [1, 5, 8, 9, 10, 17, 17, 20]; // Ans :  22
let price = [3, 5, 8, 9, 10, 17, 17, 20]; // Ans :  24
const obj = new RodCutting(n);
let ans = obj.recursive(n, price);
console.log("Recursive : ", ans);
ans = obj.bottomUp(n, price);
console.log("Bottom Up : ", ans);

/**
 * So lets say we are given
 * let n =  8 ;
   let length = [1, 2, 3, 4, 5, 6, 7, 8] ;
   let price = [3, 5, 8, 9, 10, 17, 17, 20]; // Ans :  24
    |_|_|_|_| n = 4 cut = i + 1
    |_| + fn( |_|_|_| ) => 3 + fn(3)
    |_|_| + fn(|_|_| ) => 5 + fn(2)
    |_|_|_| + fn(|_| ) => 8 + fn(1)
    |_|_|_|_| + fn(0) => 9 + fn(0) = 0 => 9 

    ANS WILL BE MAX FO ABOVE 4 CASES
    base case n <= 0 ==> 0
    fn(n, price){
        if(n <=0 ){
            return 0;
        } ans = Number.MIN_VALUE ;
        for(let i = 0 ; i < n ; i ++){
            let cut = i + 1 ;
            let res = price[i] + fn(n - cut, price);
            ans = Math.max(ans, res);
        }
        return ans;
    }    

 */