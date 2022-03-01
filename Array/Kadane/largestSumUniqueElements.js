function largestSumUniqueElements(arr){
    let n = arr.length;
    let maxSumSofar = arr[0] ;
    
    let set = new Set();
    set.add(arr[0]);
    let currMax = arr[0];
    let i = 0 ; 
    let j = 1 ;
    while(i < n - 1 && j < n){
        if(!set.has(arr[j])){
            currMax = currMax + arr[j];
            maxSumSofar = Math.max(maxSumSofar, currMax);
            set.add(arr[j]);
            j++;
        }
        else{
            currMax = currMax - arr[i];
            set.delete(arr[i]);   
            i++;
        }
    }
    return maxSumSofar;
}

console.log(largestSum([ 1, 2, 3, 3, 4, 5, 2, 1]));