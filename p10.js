class Solution {
    kthElement(A,B,n,m,k){ 
        //code here
        let mergedArrays = this.merge(A, B, n, m);
        return mergedArrays[k-1];
    }
    merge(A, B, n, m){
        let c1 = 0 ;
        let c2 = 0 ;
        let res = [];
        
        while( c1 < n && c2 < m){
            
            if(A[c1] < B[c2]){
                res.push(A[c1]);
                c1++;
            }
            else{
                res.push(B[c2]);
                c2++;
            }
        }
        while( c1 < n ){
            res.push(A[c1++]);
        }
        while( c2 < m ){
            res.push(B[c2++]);
        }

        return res;
    }
}
let A = [1, 10, 10, 25, 40, 54, 79];
let B = [15, 24, 27, 32, 33, 39, 48, 68, 82, 88, 90];

const obj = new Solution();
let x = obj.kthElement(A, B, 7, 11, 15);
console.log(x);