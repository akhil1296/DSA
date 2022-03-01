class LargeFactorial {
    constructor() {
        this.ar = [];
        this.ar.push(1);
    }
    multiply(x) {
        let carry = 0;
        this.ar.forEach((element, index) => {
            let prod = carry + element * x;
            let last_digit = prod % 10;
            this.ar[index] = last_digit;
            carry = Math.floor(prod / 10);
        });

        while (carry !== 0) {
            let last_digit = carry % 10;
            this.ar.push(last_digit);
            carry = Math.floor(carry / 10);
        }
    }
    calculate(n) {
        for (let i = 2; i <= n; i++) {
            this.multiply(i);
        }
        this.ar.reverse();
        console.log(this.ar);
    }
}
let n = 10;
const obj = new LargeFactorial();
let res = obj.calculate(n);
console.log(res);