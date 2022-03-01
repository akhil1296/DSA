/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {

    let CM = nums[0] ;
    let maxSumSoFar = CM ;
    
    for(let i = 1 ; i < nums.length ; i++){
        CM = Math.max(nums[i], CM + nums[i]);
        maxSumSoFar = Math.max(maxSumSoFar, CM);
    }
 
    return maxSumSoFar ;
};