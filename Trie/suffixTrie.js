// Build a prefix trie
class Node {
    constructor(data) {
        this.data = data;
        this.map = new Map();
        this.isTerminal = false;
    }
}

class SuffixTrie {
    constructor() {
        this.root = new Node(null);
    }
    insert(word){
        for(let i = 0 ; i < word.length ; i++){
            let char = word.substring(i) ;
            this.insertHelper(char);
        }
    }
    insertHelper(word) {
        let temp = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word.charAt(i);
            if (!temp.map.has(char)) {
                let n = new Node(char);
                temp.map.set(char, n);
            }
            temp = temp.map.get(char);
        }
        temp.isTerminal = true;
        
    }
    search(word) {
        let temp = this.root ;
        for (let i = 0; i < word.length; i++) {
            let char = word.charAt(i);
            if (!temp.map.has(char)) {
                return false;
            }
            temp = temp.map.get(char);
        }
        return temp.isTerminal = true;
    }
}


const obj = new SuffixTrie();

let word = 'hello';
let suffixes = ['lo', 'llo', 'ell'] ;
let ans = obj.insert(word);
suffixes.forEach((word) => {
    let ans = obj.search(word);
    console.log(ans);
});
