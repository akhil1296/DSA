class Solution {
    kthSmallest(arr,l,r,k){
      //code here
      let maxHeap = new Array(k).fill(Number.MAX_VALUE);
      
      for(let i = 0 ; i < arr.length ; i++){
          if(arr[i] < maxHeap[0]){
              maxHeap[0] = arr[i];
              this.heapify(maxHeap, 0, k);
          }
      }
      return maxHeap[0];
    }
    heapify(arr, i , k){
        let largest = i ;
        let left = 2 * i + 1 ;
        let right = 2 * i + 2 ;
        if(left < k && arr[left] > arr[largest]){
            largest = left ;
        }
        if(right < k && arr[right] > arr[largest]){
            largest = right ;
        }
        if(i !== largest){
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            this.heapify(arr, largest, k);
        }
    }
  }