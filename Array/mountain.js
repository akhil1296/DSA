/**
 * @param {number[]} arr
 * @return {number}
 */
 var longestMountain = function(arr) {
    // 1. Find the peak
    let ans = 0 ;
    let n = arr.length ;
    let count = 0 ;
    
    for(let i = 1 ; i < n-1 ; i++){
        if( arr[i] > arr[i-1] && arr[i] > arr[i+1]){ // peak identified
            count = 1 ;
            let peakIndex = i ; 
            while(peakIndex > 0 && arr[peakIndex] > arr[peakIndex-1]){
                count++;
                peakIndex--;
            }
             while(i < n-1 && arr[i] > arr[i+1]){
                 i++;
                count++;
            }
        }
      
        ans = Math.max(ans,count);
    }
    return ans;
};