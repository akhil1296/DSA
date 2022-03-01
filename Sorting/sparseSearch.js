function SparseSearch(arr, str){
    
    let left = 0 ;
    let right = arr.length - 1 ;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let midLeft = mid - 1 ;
        let midRight = mid + 1 ;
        
        if(arr[mid] === ""){
            while(true){
                if(midLeft < left && midRight > right){
                    return -1 ;
                }
                else if(midLeft >= left && arr[midLeft] !== ""){
                    mid = midLeft;
                    break ;
                }
                else if(midRight <= right && arr[midRight] !== ""){
                    mid = midRight;
                    break;
                }
                midLeft--;
                midRight++;
            }
        }
        if(arr[mid] === str){
            return mid ;
        }
        else if(arr[mid] > str){
            right = mid - 1;
        }
        else {
            left = mid + 1 ;
        }
    }
    return - 1;
}

let arr = ["abc", "", "", "cat","","bat","","","mat"];
let search = "cat" ;
let ans = SparseSearch(arr, search);
console.log(ans);