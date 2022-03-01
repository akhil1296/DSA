class Solution{
    maxCandy(height,n){
        //code here
        if(n<2){
            return 0;
        }
         
        let left = 0 ;
        let right = n - 1 ;
         
        let maxArea = 0 ;
        
        while(left < right){
            let area = Math.min(height[left], height[right]) * (right -left - 1);
            maxArea = Math.max(maxArea, area);
            if(height[left] < height[right]){
                left++;
            }
            else {
                right--;
            }
        }

        return maxArea;
    }
}
let ar = [1, 3, 8, 7, 5, 4, 6, 2];
let n = 8 ;
// 6 , 10 , 8 

const obj = new Solution();
let res = obj.maxCandy(ar, n);
console.log(res);