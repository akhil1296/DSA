class Subsequences {
    main() {
        let str = "abc";
        let arr = [];
        this.generateSubsequence(str, "", arr);
        return arr;
    }
    generateSubsequence(str, ch, arr) {
        if (str.length === 0) {
            arr.push(ch);
            return;
        }
        let xx = str[0];
        let reducedString = str.substring(1);
        // include character
        this.generateSubsequence(reducedString, ch + xx, arr);
        // exclude character
        this.generateSubsequence(reducedString, ch , arr);
        arr.sort((a, b)=> {
            if(a.length === b.length){
                return a - b ;
            }
            return a.length - b.length ;
        });
        return arr;
    }
}

const obj = new Subsequences();
let ans = obj.main();
console.log(ans);