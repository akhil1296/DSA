class MinimumDifference {
    findMinDiff(arr1, arr2) {
        let res = Number.MAX_VALUE ;
        arr1.sort((a,b)=>{ return a - b ;});
        arr2.sort((a,b)=>{ return a - b ;});

        let m = arr1.length; 
        let n = arr2.length;

        let j = 0 ;
        for(let i = 0 ; i < m ; i++){
            let first = arr1[i] ;
            let second = arr2[j] ;
            let diff = second - first ;
            if(diff < 0){
                j++; i--;
                continue;
            }
            res = Math.min(res, diff);
        }

        console.log(res);
    }
}

let arr1 = [23, 5, 10, 17, 30];
let arr2 = [26, 134, 135, 14, 19];

const obj = new MinimumDifference();
obj.findMinDiff(arr1, arr2);

