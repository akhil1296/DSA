class GenerateBrackets {
    generate(output, n, open, close, i) {
        if (i === 2 * n) {
            console.log(output);
            return;
        }
        if( open < n){
            this.generate(output + '(', n, open+1, close, i+1);
        }
        if( close < open){
            this.generate(output + ')', n, open, close+1, i+1)
        }
    }
}

let n = 3;
let output = '';
const obj = new GenerateBrackets();
obj.generate(output, n, 0, 0, 0);