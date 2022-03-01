class Pairs {
    findPair(arr, S) {
        // S is the target sum
        // creating a set
        let set = new Set();
        let pair = [];
        arr.forEach(element => {
            let diff = S - element;
            if (!set.has(diff)) {
                set.add(element);
            }
            else {
                pair.push([element, diff]);
            }
        });
        console.log("Pair : ", pair);
    }
}

let arr = [10, 5, 2, 3, -6, 9, 11];
let S = 4;
const obj = new Pairs();
obj.findPair(arr, S);

