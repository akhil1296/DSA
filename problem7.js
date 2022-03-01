class Solution {
    getIndex(arr, element, left, right){
        if(left <= right){
            let mid = Math.floor((left + right)/2);
            if(arr[mid] === element){
                return mid;
            }
            if(arr[mid] < element){
                return this.getIndex(arr, element, mid + 1, right);
            }
            else{
                 return this.getIndex(arr, element, left, mid-1);
            }
        }
        return -1;
    }
    isKSortedArray(arr, n, k) {
      //code here
      let count = 0;
      let aux = [...arr];
      arr.sort(function(a, b){ return a-b; });
      console.log("arr : ", arr);
      console.log("aux : ", aux);
      for(let i = 0 ; i < n ; i++){
          let element = aux[i];
          let index = this.getIndex(arr, element, 0, n-1);
           
          let diff = Math.abs(i - index);
          if(diff > k){
              count++;
              break;
          }
      }
      if(count === 0){
          return "Yes";
      }
      return "No";
    }
  }

  const obj = new Solution();
  let arr = [3, 21, 41, 5, 38, 7, 37, 2, 13, 40, 17, 34];
  let n  = 12;
  let k = 3;
  let res = obj.isKSortedArray(arr, n, k);
  console.log(res);