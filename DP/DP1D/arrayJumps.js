class ArrayJumps {
  constructor(n, arr) {
    this.arr = arr;
    this.dp = new Array(n + 1).fill(0);
  }

  topDown(n, i) {
    if (i === n - 1) { // reached the last cell
      return 0;
    }
    if (i >= n) { // Out of Bounds
      return Number.MAX_VALUE;
    }
    if (this.dp[i] !== 0) {
      return this.dp[i];
    }

    let steps = Number.MAX_VALUE;
    let maxJump = this.arr[i];

    for (let j = 1; j <= maxJump; j++) {
      let jumpedCell = i + j; // j is jump
      let subProblem = this.topDown(n, jumpedCell);
      if (subProblem !== Number.MAX_VALUE) {
        steps = Math.min(steps, subProblem + 1);
      }
    }
    return this.dp[i] = steps;
  }

  show() {
    console.log(this.dp);
  }
}


let arr = [3, 4, 2, 1, 2, 3, 7, 1, 1, 3];
let n = arr.length;
const obj = new ArrayJumps(n, arr);
let ans = obj.topDown(n, 0);
console.log(ans);
obj.show();
