class SimplifyPath{
    
    findPath(path){
        let arr = path.split('/'); // Removing //
        
        arr = arr.filter((element) => element !== '.' && element !== ''); // Removing .
       
        let stack = [] ;

        // Absolute path, if it starts with /
        if(arr[0] === '/'){
            stack.push('');
        }

        for(let i = 0 ; i < arr.length ; i++){
            let token = arr[i] ;
            if(token === '..'){ // if its a relative path
                // again check if path is relative
                if(stack.length === 0 || stack[stack.length - 1] === '..'){ // case like ../../../
                    stack.push('..');
                }
                // again check if path is absolute
                else if(stack[stack.length - 1] !== ''){
                    stack.pop();
                }
            }else{
                stack.push(token);
            }
        }

        // corner case
        if(stack.length === 1 && stack[stack.length - 1] === ''){
            return '/';
        }
       
        let res = '';
        for(let i = 0 ; i < stack.length ; i++){
            if(i !== 0){
                res += '/' + stack[i] ;
            }
        }
        return res ;
    }
}
let path = "/a/./b/../../c/";
// let path = "/../x/y/../z/././w/a///../../c/./"; // out : /x/z/c
const obj = new SimplifyPath();
let ans = obj.findPath(path);
console.log(ans);

var simplifyPath = function(path) {
    if(!path){
        return '';
    }
    const arr = path.split('/');
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case '/':
            case '.':
            case '':
                break;
            case '..':
                result.pop();
                break;
            default:
                result.push(arr[i]);
                break;
        }
    }
    
    return '/'+result.join('/');
};