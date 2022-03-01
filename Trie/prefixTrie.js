// Build a prefix trie
class Node {
    constructor(data) {
        this.data = data;
        this.map = new Map();
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node(null);
    }
    insert(word) {
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
        console.log(temp);
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

let wordArr = ['apple', 'ape', 'news', 'no', 'mango','p','po'];

const obj = new Trie();

wordArr.forEach((word) => {
    obj.insert(word);
});
let ans = obj.search('ape');
console.log(ans);