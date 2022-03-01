var findKthLargest = function(nums, k) {
     // so if we create the min heap then top element after heapify will be the kth largest element
     let n = nums.length ;
     let minHeap = new Array(k).fill(Number.NEGATIVE_INFINITY);
     
     for(let i = 0 ; i < n ; i++){
         if(nums[i] > minHeap[0]){
             minHeap[0] = nums[i]; // place the ith smallest element at the top
             heapify(minHeap, 0, k);
         }
     }
      
     return minHeap[0];
 };
function heapify(arr, i, k){
    let smallest = i ;
    let left = 2 * i + 1 ;
    let right = 2 * i + 2 ;
    
    if(left < k && arr[left] < arr[smallest]){
        smallest = left;
    }
    if(right < k && arr[right] < arr[smallest]){
        smallest = right;
    }
    if(i !== smallest){
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, smallest, k);
    }
}