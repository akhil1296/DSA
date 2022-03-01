class BoxStack {
    constructor(n) {
        this.dp = new Array(n);
    }

    bottomUp(arr, n) {
        // Sort it based on height
        arr.sort((a, b) => {
            return a[2] - b[2];
        });

        for (let i = 0; i < n; i++) {
            this.dp[i] = arr[i][2]; // Storing the height of ith box
        }

        for (let i = 1; i < n; i++) {
            // check for all boxes whose index is less than i
            for (let j = 0; j < i; j++) {

                if (this.canPlace(arr[j], arr[i])) {
                    let currentHeight = arr[i][2];
                    if (this.dp[j] + currentHeight > this.dp[i]) {
                        this.dp[i] = this.dp[j] + currentHeight;
                    }
                }
            }
        }
        let max = 0;
        for (let i = 0; i < n; i++) {
            max = Math.max(max, this.dp[i]);
        }
        console.log(this.dp);
        return max;
    }
    canPlace(box1, box2) {
        if (box1[0] > box2[0] && box1[1] > box2[1] && box1[2] > box2[2]) {
            return true;
        }
        return false;
    }
}


let arr = [[2, 1, 2],
[3, 2, 3],
[2, 2, 8],
[2, 3, 4],
[2, 2, 1],
[4, 4, 5]];

let n = arr.length;
const obj = new BoxStack(n);
let ans = obj.bottomUp(arr, n);
console.log(ans);

