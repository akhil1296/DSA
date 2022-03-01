class Tokeniser {
    checkFunctions() {
        let str = "I liked the movie, acting in movie was great!";
        let res = [];
        let x = '';
        for(let i = 0 ; i < str.length ; i++){
            let char = str[i];
            if(char !== " "){
                x = x + char ;
            }
            else{
                res.push(x);
                x = '';
            }
        }
        console.log(res);
    }

}

const obj = new Tokeniser();
obj.checkFunctions();