class House {
    maxArea(arr, k) {
        let n = arr.length;
        let i = 0; let j = 0;
        let window = 0;
        let res = [];

        while (j < n) {

            window = window + arr[j];
            j++;

            while(window > k && i < j){
                window = window - arr[i] ;
                i++;
            }

            if (window === k) {
                res.push([i, j-1]);
            }
        }
        console.log(res);
    }
}

let arr = [1, 3, 2, 1, 4, 1, 3, 2, 1, 1, 2];
let k = 8;
const obj = new House();
obj.maxArea(arr, k);
// Show i j
//  2 5 , 4 6 , 5 9