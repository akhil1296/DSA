class RotatedSearch {

    search(arr, key) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === key) {
                return mid;
            }
            else if (arr[left] <= arr[mid]) {
                if (arr[left] <= key && key <= arr[mid]) {
                    right = mid - 1;
                }
                else {
                    left = mid + 1;
                }
            } else if (arr[mid] <= arr[right]) {
                if (arr[mid] <= key && key <= arr[right]) {
                    left = mid + 1 ; 
                }else{
                    right = mid - 1 ;
                }
            }
        }
        return - 1;
    }
}

let arr = [5, 6, 7, 8, 9, 1, 2, 3, 4];
let key = 9;
const obj = new RotatedSearch();
console.log(obj.search(arr, key));