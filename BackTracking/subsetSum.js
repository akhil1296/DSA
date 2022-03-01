class SubsetSum{
    find(arr, n, k , index, sum, path, pathIndex){
        if(sum === k){
            console.log(path);
            return;
        }
        if(sum > k){
            return;
        }
        path[pathIndex] = arr[index];
        return this.find(arr, n, k , index+1, sum + arr[index], path, pathIndex +1) && this.find(arr, n, k , index, sum, path, pathIndex);
    }
}

const obj = new SubsetSum();
const arr = [1, 3, 4, 5];
const n = arr.length;
const k = 8;
let index = 0;
let sum = 0 ;
obj.find(arr, n, k , index, sum, [], 0);