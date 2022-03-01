class InversionCount {

    mergeArray(arr, start, end) {

        let i = start;
        let mid = Math.floor((start + end) / 2);
        
        let j = mid + 1;
        let res = [];
        let count = 0;

        while (i <= mid && j <= end) {
            if (arr[i] < arr[j]) {
                res.push(arr[i]);
                i++;
            } else {
                res.push(arr[j]);
                j++;
                count = count + (mid - i + 1) ;
            }
        }
        while (i <= mid) {
            res.push(arr[i]);
            i++;
        }
        while (j <= end) {
            res.push(arr[j]);
            j++;
        }
        
        let k = 0 ;
        for(let i = start ; i <= end ; i++){
            arr[i] = res[k++];
        }
        return count;
    }
    inversionCount(arr, s, e) {
        if (s >= e) {
            return 0;
        }
        let mid = Math.floor((s + e) / 2);
        let c1 = this.inversionCount(arr, s, mid);
        let c2 = this.inversionCount(arr, mid + 1, e);
        let c3 = this.mergeArray(arr, s, e);

        return c1 + c2 + c3;
    }
}

// let arr = [8, 4, 2, 1];
// let arr = [3, 1, 2];
let arr = [0, 5, 2, 3, 1];
const obj = new InversionCount();
let res = obj.inversionCount(arr, 0, arr.length - 1);
console.log(res);