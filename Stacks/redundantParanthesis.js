class RedundantParanthesis{
    constructor(){
    
    }
    findRedundant(str){
        let len = str.length ;
        let operatorFound = false ;
        let stack = [];
        for(let i = 0 ; i < len ; i++){
            let char = str.charAt(i) ;
            if(char !== ')'){
                stack.push(char);
                continue;
            }

            let poppedElement = stack.pop();
            operatorFound = false ;
            while(stack.length && poppedElement !== '('){
                poppedElement = stack.pop();
                operatorFound = true;
            }
        }

        return !operatorFound ;
    }
}

let expression = '((a+b))' ;
// let expression = '((a+b)+c)';
const obj = new RedundantParanthesis();
let ans = obj.findRedundant(expression);
console.log(ans);