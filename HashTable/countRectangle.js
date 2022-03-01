class CountRectangle {
    count(arr, n) {
        let ans = 0;
        let map = new Map();
        for (const [x, y] of arr) {
            if (!map.has(x)) {
                map.set(x, []);
            }
            if (map.has(x)) {
                let ar = map.get(x);
               
                ar.push(y);
                map.set(x, ar);
            
            }
        }
        console.log('This is the map : ', map);

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let P1 = arr[i];
                let P2 = arr[j];
                // let P3 = [P1[0], P2[1]];
                // let P4 = [P1[1], P2[0]];

                if (P2[0] === P1[0] || P2[1] === P1[1]) {
                    continue;
                }

                if(map.has(P1[0]) && map.has(P2[0])){
                    let val1 = map.get(P1[0]) ;
                    let val2 = map.get(P2[0]) ;
                    if(val1.includes(P1[1]) && val2.includes(P2[1])){
                        ans++;
                    }
                }
            }
        }
        return Math.floor(ans / 2);

    }
}

let arr = [[0, 0], [0, 1], [1, 1], [3, 1], [1, 0], [2, 1], [2, 0], [3, 0]];
let n = arr.length;

const obj = new CountRectangle();
let ans = obj.count(arr, n);
console.log(ans);