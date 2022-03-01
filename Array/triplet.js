class Triplet {
    findTriplet(arr, S) {
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i];
            let diff = S - element;

            let left = i + 1;
            let right = arr.length - 1;

            while (left < right) {
                let sum = arr[left] + arr[right];
                if (sum === diff) {
                    res.push([element, arr[left], arr[right]]);
                    left++;
                }
                else if (diff > sum) {
                    left++;
                }
                else {
                    right--;
                }
            }
        }
        console.log(res);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
let S = 18;
const obj = new Triplet();
obj.findTriplet(arr, S);

