class Nbits{
    binary(arr, n, i){
        if(i === n){
            console.log(arr);
            return;
        }
        arr[i] = 0 ;
        this.binary(arr,n, i+1);
        arr[i] = 1 ;
        this.binary(arr,n, i+1);

    }
}
const obj = new Nbits();
let n = 2;
let i = 0;
let arr = new Array(n);
arr.fill(0);
obj.binary(arr, n, i);