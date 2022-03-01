/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let n = height.length ;
    let left =  new Array(n).fill(0);
    let right =  new Array(n).fill(0);
    let maxHeight = 0 ;
    //forming left and right arrays
    for(let i = 0 ; i < n ; i++){
        maxHeight = Math.max(maxHeight, height[i]);
        left[i] = maxHeight ;
    }
    maxHeight = 0 ;
    for(let i = n-1 ; i >= 0 ; i--){
        maxHeight = Math.max(maxHeight, height[i]);
        right[i] = maxHeight ;
    }
    let ans = 0 ;
    for(let i = 0 ; i < n ; i++){
        ans += Math.min(left[i], right[i]) - height[i] ;
    }
    return ans;
};