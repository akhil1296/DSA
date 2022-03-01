/**
 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(arr) {
    let smallest = Number.MAX_VALUE ;
    let largest = Number.MIN_VALUE ;
    
    for(let i = 0 ; i < arr.length ; i++){
        if(outOfOrder(arr, i)){
            
            smallest = Math.min(smallest, arr[i]);
            largest = Math.max(largest, arr[i]);
        }
    }
    
    console.log(smallest, largest);
    if(smallest === Number.MAX_VALUE){
        return 0 ;
    }
    let left = 0 , right = arr.length - 1 ;
    
    while(smallest >= arr[left]){
        left++;
    }
    while(largest <= arr[right]){
        right--;
    }
    console.log(left, right);
    return right - left + 1 ;
};

function outOfOrder(arr, i){
    let x = arr[i];
    if(i === 0){
        return x > arr[1] ;
    }
    if(i === arr.length - 1){
        return x < arr[i-1] ;
    }
    
    return (x < arr[i-1]) || (x > arr[i+1]) ;
}
let nums = [1,2,3,4,5,8,6,7,9,10,11] ;
console.log(findUnsortedSubarray(nums));