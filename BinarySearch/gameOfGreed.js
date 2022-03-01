class GameOfGreed{
    canPlace(limit, arr, k){
        let currentSum = 0 ;
        let count = 0 ;
        for(let i = 0 ; i < arr.length ; i++){
            if(currentSum + arr[i] >= limit){
                count = count + 1 ;
                currentSum = 0 ;
            }else{
                currentSum = currentSum + arr[i] ;
            }
        }
        return count >= k ;
    }
    maxCoins(k, arr){
        let left = 0 ;
        let right = 0 ;
        for(let i = 0 ; i < arr.length ; i++){
                right = right + arr[i] ;
        }
        let ans = - 1 ;
        while(left <= right){
            let mid = Math.floor((left + right) / 2) ;
            let isPossible = this.canPlace(mid, arr, k);
            if(isPossible){
                left = mid + 1 ;
                ans = mid ;
            }else{
                right = mid - 1 ;
            }
        }
        return ans;
    }
}

let k = 3 ;
let coins = [1, 2, 3, 4] ;
const obj = new GameOfGreed();
console.log(obj.maxCoins(k, coins));