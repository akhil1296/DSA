const{ MinHeightBST } = require('./minHeightBST');
let arr = [1, 2, 3, 5, 6, 7];
const obj = new MinHeightBST();
let root = obj.sortedArrayToBST(arr, 0, arr.length - 1);

class ClosestBST{
    findClosest(root, target){
        let diff = Number.MAX_VALUE ;
        let temp = root ;
        
        let closest = 0 ;
        while(temp !== null){
            let currentDiff = Math.abs(target - temp.data) ;
            if(currentDiff === diff){
                return temp.data;
            }
            if(currentDiff < diff){
                diff = currentDiff ;
                closest = temp.data;
            }
            if(target > temp.data){
                temp = temp.right ;
            }else{
                temp = temp.left ;
            }
        }
        return closest ;
    }
}

let target = 4;
const obj1 = new ClosestBST();

let ans = obj1.findClosest(root, target);
console.log(ans);

