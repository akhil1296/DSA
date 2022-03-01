/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let left = 0 ;
    let right = nums.length - 1 ;
    let mid = 0 ;
      
     while(mid <= right){
         if(nums[mid] === 0){
             [nums[left], nums[mid]] = [nums[mid], nums[left]];
             left++;
             mid++;
         }
         else if(nums[mid] === 1){
             mid++;
         }
         else if(nums[mid] === 2){
             [nums[right], nums[mid]] = [nums[mid], nums[right]];
             right--;
         }
     }
      
  };
//  var sortColors = function(nums) {
//     let fr0 = 0 ;
//     let fr1 = 0 ;
//     let fr2 = 0 ;
//     nums.forEach((element)=>{
//         if(element === 0){
//             fr0++;
//         }
//         else if(element === 1){
//             fr1++;
//         }
//         else if(element === 2){
//             fr2++;
//         }
//     });
    
//     for(let i = 0 ; i < fr0 ; i++){
//         nums[i] = 0 ;
//     }
//     for(let i = fr0 ; i < fr0 + fr1 ; i++){
//         nums[i] = 1 ;
//     }
//     for(let i = fr0 + fr1 ; i < fr0 + fr1 + fr2 ; i++){
//         nums[i] = 2 ;
//     }
    
// };
