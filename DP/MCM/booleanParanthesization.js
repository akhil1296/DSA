/**
 * Given a boolean expression S of length N with following symbols.
Symbols
    'T' ---> true
    'F' ---> false
and following operators filled between symbols
Operators
    &   ---> boolean AND
    |   ---> boolean OR
    ^   ---> boolean XOR
Count the number of ways we can parenthesize the expression so that the value of expression evaluates to true.

 

Example 1:

Input: N = 7
S = T|T&F^T
Output: 4
Explaination: The expression evaluates 
to true in 4 ways ((T|T)&(F^T)), 
(T|(T&(F^T))), (((T|T)&F)^T) and (T|((T&F)^T)).
Example 2:

Input: N = 5
S = T^F|F
Output: 2
Explaination: ((T^F)|F) and (T^(F|F)) are the 
only ways.
 

Your Task:
You do not need to read input or print anything. Your task is to complete the function countWays() which takes N and S as input parameters and returns number of possible ways modulo 1003.

 
 */

/**
 * @param {string} S
 * @param {number} n
 * @returns {number}
*/

class Solution {
    
    countWays(S, n)
    {
        //your code here
        this.mod = 1003;
        this.map = new Map();
        return this.solve(S, 0, n-1, true) % this.mod;
    }
    solve(str, i, j, isTrue){
        // base condition
        if(i > j){
            return 0;
        }
        if(i === j){ // means 1 length of character
            if(isTrue){
                return str.charAt(i) === 'T';
            }
            else{
                return str.charAt(i) === 'F';
            }
        }
        let temp = i.toString() + ' ' + j.toString() + ' ' + isTrue.toString();
        if(this.map.has(temp)){
            return this.map.get(temp);
        }
        let ans = 0;
        for(let k = i + 1 ; k < j ; k = k + 2){
            let lt = this.solve(str, i, k - 1, true);
            let lf = this.solve(str, i, k - 1, false);
            let rt = this.solve(str, k + 1, j, true);
            let rf = this.solve(str, k + 1, j, false);
            
            if(str.charAt(k) === '&'){
                if(isTrue){
                    ans = (ans + lt * rt) % this.mod ;    
                }
                else{
                    ans = (ans + lt * rf + lf * rt + lf * rf) % this.mod ;
                }
            }
            else if(str.charAt(k) === '|'){
                if(isTrue){
                    ans = (ans + lt * rf + lf * rt + lt * rt) % this.mod ;    
                }
                else{
                    ans = (ans + lf * rf) % this.mod;
                }
            }
            else if(str.charAt(k) === '^'){
                if(isTrue){
                    ans = (ans + lt * rf + lf * rt) % this.mod ;    
                }
                else{
                    ans = (ans + lf * rf + lt * rt) % this.mod;
                }
            }
        }
        this.map.set(temp, ans % this.mod);
        return this.map.get(temp);
    }
    
}