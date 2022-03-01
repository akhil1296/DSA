class FrequencyCount {
    countFrequency(arr, key) {
        return this.getUpperBound(arr, key) - this.getLowerBound(arr, key) + 1 ;
    }
    getLowerBound(arr, target){
        let left = 0;
        let right = arr.length - 1 ;
     
        
        while(left <= right){
            let mid = left + Math.floor((right - left) / 2);
            
            if(target <= arr[mid]){
                right = mid - 1 ;
            }
            else{
                left = mid + 1 ;
            }
        }
        return left ;
    }
    getUpperBound(arr, target){
        let left = 0;
        let right = arr.length - 1 ;
     
        
        while(left <= right){
            let mid = left + Math.floor((right - left) / 2);
            
            if(target >= arr[mid]){
                left = mid + 1 ;
            }
            else{
                right = mid - 1 ;
            }
        }
        return right ;
    }
}

let arr = [0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 5, 10];
let key = 1;
const obj = new FrequencyCount();
console.log(obj.countFrequency(arr, key));
console.log(obj.getLowerBound(arr, 6));
console.log(obj.getUpperBound(arr, 6));