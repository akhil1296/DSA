class SquareRoot{
    find(n, p){
        let left = 0 ;
        let right = n ;
        let ans = 0.0 ;
        // binary search to get integer portion
        while(left <= right){
            let mid = Math.floor((left + right)/ 2);
            if(mid * mid === n){
                return mid ;
            }
            else if((mid * mid) < n){
                ans = mid ;
                left = mid + 1 ;
            }else{
                right = mid - 1 ;
            }
        }
        // linear search
        let inc = 0.1 ;
        for(let i = 0 ; i < p ; i++){
    
            while((ans * ans) <= n){
                ans = ans + inc ;
            }

            ans = ans - inc ;
            inc = inc / 10;   
        }
        return ans.toFixed(p);
    }
    
}

let n = 10 ;
let p = 3 ;
const obj = new SquareRoot();
let ans = obj.find(n, p);
console.log(ans);