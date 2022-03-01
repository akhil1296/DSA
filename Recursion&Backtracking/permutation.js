class Permutation{
    findPermutations(s, answer){
        // base case
        if(s.length === 0){
            console.log(answer + '');
            return ;
        }
        // rec case
        for(let i = 0 ; i < s.length ; i++){
            let char = s.charAt(i) ;
            let left = s.substring(0, i);
            let right = s.substring(i+1)
            let res = left + right ;
            this.findPermutations(res, answer + char);
        }
    }
}

const obj = new Permutation();
let str = 'abc' ;
obj.findPermutations(str, '');
