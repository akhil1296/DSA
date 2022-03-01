class TripletGCP {
    find(arr, n, r) {
        let left = new Map();
        let right = new Map();

        arr.forEach(x => {
            if(!left.has(x)){
                left.set(x, 0) ;
            }
            if(!right.has(x)){
                right.set(x, 1) ;
            }
            else if(right.has(x)){
                let y = right.get(x) ;
                right.set(x, y + 1) ;
            }
        });

        let ans = 0;
        for (let i = 0; i < n; i++) {
            let x = arr[i];
            let val = right.get(x) ;
            right.set(x, val-1);

            if (x % r === 0) {
                let a = x / r;
                // let b = x;
                let c = x * r;
                if(left.get(a) && right.get(c)){
                    ans = ans + left.get(a) * right.get(c);
                }
            }
            val = left.get(x) ;
            left.set(x, val+1);
        }
        return ans;

    }
}

let arr = [1, 16, 4, 16, 64, 16];
let n = arr.length;
let r = 4;
const obj = new TripletGCP();
let ans = obj.find(arr, n, r);
console.log(ans);