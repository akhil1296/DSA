class CheckSubsets{
    check(){
        let str = "codingminutes" ;
        let x = "cines";
        let n1 = str.length ;
        let n2 = x.length ;

        let i = 0 ; 
        let j = 0 ;
        while(i !== n1 && j !== n2){
            if(str.charAt(i) === x.charAt(j)){
                j++;
                continue;
            }
            i++;
        }
        return j === n2 ? true : false ;
    }
}

const obj = new CheckSubsets();
let ans = obj.check();
console.log(ans);