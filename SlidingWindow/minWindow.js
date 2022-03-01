/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    // s is the string , and t is the pattern
   let map1 = new Map();
   let map2 = new Map();

   for(let i = 0 ; i < t.length ; i++){
       // setting the map for the pattern
       let char = t.charAt(i);
       map2.set(char, map2.get(char) + 1 || 1);
   }

   let dmct = t.length ; // desired match count
   let mct = 0 ; // match count , which will increase when frequency of map1, map2 increases
   let i = -1;
   let j = -1 ;
   let ans = "";

   while(true){
       let flag1 = false ;
       let flag2 = false ;
       // acquire
       while(i < s.length && mct < dmct){
           i++;
           let char = s.charAt(i);
           map1.set(char, map1.get(char) + 1 || 1);
          
           if(map1.get(char) <= map2.get(char)){
               mct++;
           }
           flag1 = true;
       }
   
       // collect answers and release
       while(j < i && mct === dmct){
           let probableAnswer = s.substring(j + 1, i + 1);
           if(ans.length === 0 || probableAnswer.length < ans.length){
               ans = probableAnswer ;
           }
           j++;
           let char = s.charAt(j);
           
           map1.set(char, map1.get(char) - 1) ;
           
           if(map1.get(char) < map2.get(char)){
               mct--;
           }
           if(map1.get(char) === 0){
               map1.delete(char);
           }
           flag2 = true;
       }
   
       if(flag1 === false && flag2 === false){
           break;
       }
   }
  
   return ans;
};
let s = "ADOBECODEBANC" ;
let t = "ABC" ;
let ans = minWindow(s, t);
console.log(ans);

