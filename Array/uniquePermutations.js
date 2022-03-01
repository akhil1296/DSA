/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  
     
    let ans = [] ;
    let res = helper(nums, new Set(), ans, nums.length);
    
    return ans;
};

function helper(arr, set , ans, n){
    // base case
    if(set.size === n){
        ans.push(Array.from(set)); 
        return ;
    }
    for(let i = 0 ; i < n ; i++){
        if(set.has(arr[i])){
           continue; 
        }
        set.add(arr[i]);
        helper(arr, set, ans, n);
        set.delete(arr[i]);
    }
       
}

let str = "abs";
let arr = Array.from(str);
// let arr  = [1, 2, 1] ;
console.log(permute(arr));

// This program runs specifically if the elements of array are distinct