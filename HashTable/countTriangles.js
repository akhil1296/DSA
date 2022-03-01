class CountTriangle {
    count(arr, n) {
        let xMap = new Map();
        let yMap = new Map();
        let ans = 0;

        for (const [x, y] of arr) {
            if (xMap.has(x)) {
                let count = xMap.get(x);
                xMap.set(x, count + 1);
            }
            if (yMap.has(y)) {
                let count = yMap.get(y);
                yMap.set(y, count + 1);
            }

            if (!xMap.has(x)) {
                xMap.set(x, 1);
            }
            if (!yMap.has(y)) {
                yMap.set(y, 1);
            }
        }
       
        for (const [x, y] of arr) {
            let fr1 = xMap.get(x);
            let fr2 = yMap.get(y);
            if (fr1 >= 1 && fr2 >= 1) {
                ans = ans + (fr1 - 1) * (fr2 - 1);
            }
        }
        return ans;
    }
}

let arr = [[1, 2], [2, 1], [2, 2], [2, 3], [3, 2]];
let n = arr.length;

const obj = new CountTriangle();
let ans = obj.count(arr, n);
console.log(ans);