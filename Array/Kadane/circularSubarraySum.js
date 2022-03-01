class Solution {
    //Function to find maximum circular subarray sum.
    circularSubarraySum(arr, N){
        // code here
        // base case
        if(N === 1){
            return arr[0];
        }
        let sum = 0 ;
        
        for(let i = 0 ; i < N ; i++){
            sum = sum + arr[i];
        }
        
        let maxSumSoFar = arr[0];
        let minSumSoFar = arr[0];
        
        let currMax = arr[0];
        let currMin = arr[0];
        
        for(let i = 1 ; i < N ; i++){
            currMax = Math.max(arr[i], arr[i] + currMax);
            maxSumSoFar = Math.max(maxSumSoFar, currMax);
            
            currMin = Math.min(arr[i], arr[i] + currMin);
            minSumSoFar = Math.min(minSumSoFar, currMin);
        }
        
        if(sum === minSumSoFar){
            return maxSumSoFar;
        }
        
        return Math.max(maxSumSoFar, sum - minSumSoFar);

    } 
}