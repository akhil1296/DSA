function minsubarray(arr){
    let n = arr.length;
    
    let minSumSofar = Number.MAX_VALUE;
    let currMin = Number.MAX_VALUE;

    for(let i = 0 ; i < n ; i++){
        if(currMin > 0){
            currMin = arr[i];
        }else{
            currMin = currMin + arr[i];
        }
        minSumSofar = Math.min(currMin, minSumSofar);
    }
    return minSumSofar;
}

console.log(minsubarray([3, -4, 2, -3, -1, 7, -5]));