function findMissing(arr){
    let left = 0 ;
    let right = arr.length - 1 ;
    while(left <= right){
        let mid = Math.floor((left + right ) / 2);
        // consistency is there
        if(arr[mid] - mid === arr[0]){
            if(arr[mid + 1] - arr[mid] > 1)
            {
                return arr[mid] + 1 ;
            }else{ // go right
                left = mid + 1;
            }
        }else{ // inconsistency
            if(arr[mid] - arr[mid -1 ] > 1){
                return arr[mid] - 1;
            }else{
                right = mid - 1;
            }
        }
    }
    return -1;
}
let arr = [1,2,3,4,5,7,8] ;
console.log(findMissing(arr));