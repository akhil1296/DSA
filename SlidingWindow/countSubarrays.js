class CountSubarrays {
    findSubarraySum(arr, n, k) {
        let map = new Map();
        let currSum = 0 ;
        let res = 0 ;
         
        for(let i = 0 ; i < n ; i++){
            currSum = currSum + arr[i] ;

            if(currSum === k){
                res++;
            }
            if(map.has(currSum - k)){
                res+=map.get(currSum - k);
            }
            map.set(currSum, map.get(currSum) + 1 || 1);
        }
        
        return res;
    }
    

}
let arr = [10, 2, -2, -20, 10];
let k = -10;
const obj = new CountSubarrays();
let ans = obj.findSubarraySum(arr, arr.length, k);
console.log(ans);


