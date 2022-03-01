class MinPairs {
     
    lowerBound(arr, key){
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if(key <= arr[mid]){
                right = mid - 1 ;
            }else{
                left = mid + 1 ;
            }
        }
        return left; // see how lower bounds and upper bounds work
    }

    getPair(a1, a2){
        a2.sort((a, b)=> { return a - b ;});
         
        let diff = Number.MAX_VALUE ;
        let p1 = 0 ; 
        let p2 = 0 ;
        
        for(let i = 0 ; i < a1.length ; i++){
            let x = a1[i] ;
            let lb = this.lowerBound(a2, x);

            console.log(lb);
            // left
            if(lb >= 1 && x - a2[lb-1] < diff){
                diff = x - a2[lb-1] ;
                p2 = x ;
                p1 = a2[lb-1];
            }
            if(lb !== a2.length && a2[lb] - x < diff){
                diff = a2[lb] - x ;
                p2 = x ;
                p1 = a2[lb];
            }
        }
        return [p1, p2] ;
    }
}

let a1 = [-1, 5, 10, 20, 3] ;
let a2 = [26, 134, 135, 15, 17];

const obj = new MinPairs();
console.log(obj.getPair(a1, a2));