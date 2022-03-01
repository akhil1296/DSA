class UniqueSubstring {
    longestUniqueSubstring(str) {
        let len = str.length;
        let map = new Map();
        let longest = 0;
        let start = 0;
        let substring = '';

        for (let i = 0; i < len; i++) {
            let char = str.charAt(i);

            if (map.has(char)) {
                start = Math.max(start, map.get(char)+1);
            }
            // longest = Math.max(longest, i - start + 1);
            if( (i - start + 1) > longest ){
                longest = i - start + 1 ;
                substring = str.substring(start, i+1);
            }
            map.set(char, i);
        }
        console.log(substring);
        return longest;
    }
}

let str = 'prateekbhaiya'; // ekbhaiy
const obj = new UniqueSubstring();
let ans = obj.longestUniqueSubstring(str);
console.log(ans);