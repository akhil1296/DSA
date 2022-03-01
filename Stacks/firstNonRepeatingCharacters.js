class FirstNonRepeatingCharacters {
    constructor(){
        this.map = new Map();
    }
    findNonRepeatingCharacters(str){
        let q = [] ;
        let output = '';
        for(let i = 0 ; i < str.length ; i++){
            let char = str.charAt(i) ;
            // update the frequency
            this.updateFrequency(char);
            if(this.map.get(char) === 1){ // means not in q
                q.push(char);
            }
            
            while(q.length > 0 && this.map.get(q[0]) > 1){
                q.shift();
            }
    
            if(q.length > 0){
                output += q[0];
                continue;
            }
            output += '-1' ;
        }
        return output;
    }
    updateFrequency(char){
        if(!this.map.has(char)){
            this.map.set(char, 1) ;
        }else{
            let fr = this.map.get(char) ;
            this.map.set(char, fr + 1) ;
        }
    }
}

let str = 'aabccbcd';
const obj = new FirstNonRepeatingCharacters();
let ans = obj.findNonRepeatingCharacters(str);
console.log(ans);