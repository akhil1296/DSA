class Solution{
    maxSubstring(s){
        //code here
        // convert all 0s to 1s and all 1s to -1
        let n = s.length;
        
        let currMax = 0 ;
        let maxSumSoFar = 0;
        for(let i = 0 ; i < n ; i++){
            
            currMax =  currMax + ((s[i] == '0') ? 1 : -1 );
           
            if(currMax < 0){
                currMax = 0 ;
            }
            maxSumSoFar = Math.max(maxSumSoFar, currMax);
        }
        return maxSumSoFar === 0 ? -1 : maxSumSoFar;
    }
}