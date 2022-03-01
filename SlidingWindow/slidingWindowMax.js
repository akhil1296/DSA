/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(arr, k) {
    let n = arr.length;
    // k is the window_size
    let dq = []; // we will push the index
    let res = [];
    
    if(n < k){
        return null;
    }
    
    for(let i = 0 ; i < k ; i++){
       // let top = dq[dq.length - 1] ;
       while(dq.length > 0 && arr[i] >= arr[dq[dq.length - 1]]){
           dq.pop();
       } 
        dq.push(i);
    }
    res.push(arr[dq[0]]);
    for(let i = k ; i < n ; i++){
       // let top = dq[dq.length - 1] ;
       while(dq.length > 0 && arr[i] >= arr[dq[dq.length - 1]]){
           dq.pop();
       } 
        
       if(dq.length > 0 && dq[0] <= (i - k)){ // pop the indexes from the dq if its out of the window size
        dq.shift();  
        } 
        dq.push(i);
        res.push(arr[dq[0]]);
    }
    return res;
};