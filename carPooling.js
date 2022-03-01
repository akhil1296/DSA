var carPooling = function(trips, capacity) {

     let ar = new Array(1001).fill(0);
     for(const [w, u, v] of trips){
         ar[u] = ar[u] + w ;
         ar[v] = ar[v] - w ;
     }
     let ans = 0 ;
     
     for(let i = 0 ; i < 1001 ; i++){
         ans = ans + ar[i] ;
         if(ans > capacity){
             return false;
         }
     }
    
      return true;
  };

let trips = [[2,1,5],[3,3,7]], capacity = 4 ;
const res = carPooling(trips, capacity);
console.log(res);