/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) { // O(1) space complexity
    let n = nums.length;
    let products = new Array(n).fill(1);
      let left = 1 ;
      for(let i = 0 ; i < n ; i++){
          products[i] = left ;
          left *= nums[i];
      }
      console.log(products);
      let right = 1 ;
      for(let i = n-1 ; i >= 0 ; i--){
          products[i] *= right ;
          right *= nums[i];
      }
      return products;
  };
  
  var product = function(nums) { // O(n) space complexity
    let n = nums.length;
    let products = new Array(n).fill(1);
    let prefix = new Array(n).fill(1);
    let postfix = new Array(n).fill(1);
    prefix[0] = 1 * nums[0] ;

    for(let i = 1 ; i < n ; i++){
        prefix[i] = prefix[i-1] * nums[i] ;
    }
    postfix[n-1] = nums[n-1] * 1 ; 
    for(let i = n-2 ; i >= 0 ; i--){
        postfix[i] = postfix[i+1] * nums[i] ;
    }
    products[0] = 1 * postfix[0] ;
    products[n-1] = prefix[n-2] * 1 ;
    for(let i = 1 ; i < n-1 ; i++){
        products[i] = prefix[i-1] * postfix[i+1] ;
    }
      return products;
  };
let nums = [1,2,3,4] ;
console.log(productExceptSelf(nums));
console.log(product(nums));