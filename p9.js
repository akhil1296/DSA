class Solution{
    rightmostNonZeroDigit(arr,n){
        //code here
        let ans = 1 ;
        arr.forEach((element)=>{
            let x = this.getNonZeroDigit(element);
            ans = ans * x ;
            ans = this.getNonZeroDigit(ans);
            console.log('ans',ans);
        });
        return ans ;
    }
    getNonZeroDigit(n){
         
        let rem = n % 10 ;
        while(rem === 0){
            rem = n % 10 ;
            n = Math.floor(n/10);
        }
        return rem;
    }
}

let arr = [3,23,30,45];
let n = 4;
const obj = new Solution();
let res = obj.rightmostNonZeroDigit(arr, n);
console.log(res);