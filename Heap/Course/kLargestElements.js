class Solution 
{
    //Function to return k largest elements from an array.
    kLargest(arr,n,k)
    {
    //code here
    // build a min heap of size k
    let minHeap = new Array(k).fill(Number.MIN_VALUE);
     for(let i = 0 ; i < arr.length ; i++){
         if(arr[i] > minHeap[0]){
             minHeap[0] = arr[i];
             this.heapify(minHeap, 0, k);
         }
     }
     return minHeap.sort((a, b)=> {
         return b - a;
     });
    }
    
    heapify(arr, i, k){
        let smallest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        if(left < k && arr[left] < arr[smallest]){
            smallest = left;
        }
        if( right < k && arr[right] < arr[smallest]){
            smallest = right;
        }

        if(i !== smallest){
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
            this.heapify(arr, smallest, k);
        }
    }
}