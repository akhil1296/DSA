class AngryBirds{
    getDistance(arr, n, b){
        let left = 0 ;
        let right = arr[n-1] - arr[0] ;
        let ans = - 1 ;
        while(left <= right){
            let mid = Math.floor((left + right) / 2); // mid is the separation
            let canPlace = this.canPlace(arr, n, mid, b) ;
            if(canPlace){
                ans = mid ;
                left = mid + 1 ;
            }else{
                right = mid - 1 ;
            }
        }
        return ans ;
    }
    canPlace(arr, n, sep, b){
       
        let location = arr[0] ;
        let count = 1 ;

        for(let i = 1 ; i < n ; i++){
            let currentLocation = arr[i] ;
            if(currentLocation - location >= sep){
                location = currentLocation ;
                count++;
            }
            if(count === b){
                return true;
            }
        }
        return false;
    }
}

let n = 5 ;
let b = 3 ;
let nests = [1, 2, 4, 8, 9]; // must be sorted
const obj = new AngryBirds();
console.log(obj.getDistance(nests, n, b));