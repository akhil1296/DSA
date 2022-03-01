class Solution {
    constructor(){
        this.map = new Map();
    }
    majorityElement(a, size)
    {
        //your code here
        if(size === 1){
            return a[0];
        }
        a.forEach((element)=>{
           this.setFrequency(element); 
        });
        console.log(this.map);
        let max = Number.MIN_VALUE;
        let res = -1;
        this.map.forEach((value, key)=>{
            console.log('key : ', key);
            console.log('value : ', value);
            if( value > max ){
               
                if(value > Math.floor(size/2)){
                    
                   max = value ;
                   res = key;
                   console.log("B : ", res, max);
                }
            }
        });
        if(max === 1){
            res = -1;
        }
        return res;
    }
    setFrequency(element){
        if(!this.map.has(element)){
            this.map.set(element, 1);
        }
        else{
            let fr = this.map.get(element);
            this.map.set(element, fr+1);
        }
    }
}

const obj = new Solution();
let a = [15];
let n = 1 ;
let res = obj.majorityElement(a, n);
console.log(res);