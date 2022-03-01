/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let count = 0 ;
    let ans = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        // look for head
        count = 0 ;
        let lookUpValue = nums[i] - 1 ;
        if(!set.has(lookUpValue)){ // no parent found, hence can start the band
            count++;
            lookUpValue = nums[i] + 1 ;
            while(set.has(lookUpValue)){
                count++;
                lookUpValue++;
            }
        }
        ans = Math.max(ans, count);
    }
    return ans;
};