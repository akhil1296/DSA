var largestRectangleArea = function(arr) {
    let n = arr.length;
     let stack = [];
        let left = new Array(n).fill(-1);
        let right = new Array(n).fill(n);
        
        right[n] = n ;
        stack.push(n-1);
        for(let i = n - 2 ; i >= 0 ; i--){
            while(stack.length > 0 &&  arr[i] <= arr[stack[stack.length - 1]]){
                stack.pop();
            }
            if(stack.length === 0){
                right[i] = n;
            }
            else{
                right[i] = stack[stack.length - 1];
            }
            stack.push(i);
        }
        
        stack = [];
        stack.push(0);
        for(let i = 1 ; i < n; i++){
            while(stack.length > 0 &&  arr[i] <= arr[stack[stack.length - 1]]){
                stack.pop();
            }
            if(stack.length === 0){
                left[i] = -1;
            }
            else{
                left[i] = stack[stack.length - 1];
            }
            stack.push(i);
        }
        let ans = 0 ;
        for(let i = 0 ; i < n ; i++){
            let temp = (right[i] - left[i] - 1) * arr[i];
            ans = Math.max(ans, temp);
        }
      
        return ans;
};