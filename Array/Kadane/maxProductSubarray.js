/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
 
    let n = nums.length;
    let max_ending_here = nums[0];
    let min_ending_here = nums[0];
    let max_pd_so_far = nums[0];
    
    for(let i = 1 ; i < n ; i++){
    let temp = Math.max(nums[i], nums[i] * max_ending_here, nums[i] * min_ending_here);
    min_ending_here = Math.min(nums[i], nums[i] * max_ending_here, nums[i] * min_ending_here);
        max_ending_here = temp;
        max_pd_so_far = Math.max(max_pd_so_far, max_ending_here);
    }
        
    return max_pd_so_far ;
};