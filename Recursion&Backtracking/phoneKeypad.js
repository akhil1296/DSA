class Keypad {
    find(number, curr, output, n, keypad) {
        // base case
        if (curr == n) {
            console.log(output.join(""));
            return;
        }
        // Try all 3 possible characters for current
        // digit in number[] and recur for remaining digits
        for (let i = 0; i < keypad[number[curr]].length; i++) {

            output.push(keypad[number[curr]][i]);

            this.find(number, curr + 1, output, n, keypad);

            output.pop();

            if (number[curr] == 0 || number[curr] == 1) {
                return;
            }
        }
    }
}

const obj = new Keypad();
let keypad = ['', '', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
let number = [2, 3];
let output = [];
let n = number.length;
obj.find(number, 0, output, n, keypad);