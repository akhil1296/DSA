function largestSum(arr){
    let n = arr.length;
   let maxSumSofar = 0 ;
    for(let i = 0 ; i < n ; i++){
       let currSum = arr[i];
        while(i + 1 < n && arr[i] < arr[i+1]){
            currSum = currSum + arr[i + 1];
            i++;
        }
        maxSumSofar = Math.max(maxSumSofar, currSum);
    }
    return maxSumSofar;
}

console.log(largestSum([1, 1, 4, 7, 3, 6]));