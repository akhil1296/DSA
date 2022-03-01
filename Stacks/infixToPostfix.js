/**
 * @param {string} s
 * @returns {string}
*/
class Solution 
{   constructor(){
        this.stack = [];
        this.length = 0 ;
        this.top = -1;
    }
    isEmpty(){
        return this.stack.length === 0 ;
    }
    peek(){
        return this.stack[this.stack.length - 1];
    }
    //Function to convert an infix expression to a postfix expression.
    infixToPostfix(s)
    {   let result = '';
        
        // code here
        for(let i = 0 ; i < s.length ; i++){
            let character = s.charAt(i);
            // if the charachter is an operand directly add to the result
            if(this.isOperand(character)){
                result = result + character;
            }
            // if the character is '(' directly push to the stack
            else if(character === '('){
                this.stack.push(character);
            }
            //  If the scanned character is an ')',
            // pop and output from the stack
            // until an '(' is encountered.
            else if(character === ')'){
                while(!this.isEmpty() && this.peek() !== '('){
                    result = result + this.stack.pop();
                }
                this.stack.pop();
            }
            // An operator is encountered
            else{
                 while(!this.isEmpty()  && this.precedence(character) <= this.precedence(this.peek())){
                    result = result + this.stack.pop();
                }
                this.stack.push(character);
            }
        }
        while(!this.isEmpty()){
            result = result + this.stack.pop();
        }
        return result;
    }
    isOperand(operand){
        return (operand >= 'a' && operand <= 'z') || (operand >= 'A' && operand <= 'Z');
    }
    precedence(operator){
        switch(operator){
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 2;
            case '^':
                return 3;
        }
        return -1;
    }
}

/**
 * Given an infix expression in the form of string str. Convert this infix expression to postfix expression.

Infix expression: The expression of the form a op b. When an operator is in-between every pair of operands.
Postfix expression: The expression of the form a b op. When an operator is followed for every pair of operands.
â€‹Note: The order of precedence is: ^ greater than * equals to / greater than + equals to -. 
Example 1:

Input: str = "a+b*(c^d-e)^(f+g*h)-i"
Output: abcd^e-fgh*+^*+i-
Explanation:
After converting the infix expression 
into postfix expression, the resultant 
expression will be abcd^e-fgh*+^*+i-
Example 2:

Input: str = "A*(B+C)/D"
Output: ABC+*D/
Explanation:
After converting the infix expression 
into postfix expression, the resultant 
expression will be ABC+*D/
 
Your Task:
This is a function problem. You only need to complete the function infixToPostfix() that takes a string(Infix Expression) as a parameter and returns a string(postfix expression). The printing is done automatically by the driver code.

Expected Time Complexity: O(|str|).
Expected Auxiliary Space: O(|str|).

Constraints:
1 ≤ |str| ≤ 105
 */