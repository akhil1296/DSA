class Solution {

    spirallyTraverse(matrix, N, M, X) {
        // code here
        let smallest = matrix[0][0];
        let largest = matrix[N - 1][M - 1];
        let i = 0; let j = M - 1;
        if (X < smallest && X > largest) {
            return false;
        }
        while (i < N && j >= 0) {
            if (matrix[i][j] === X) {
                console.log(`At ${i+1}, ${j+1} `);
                return true;
            }
            else if (matrix[i][j] < X) {
                i++;
            } else {
                j--;
            }
        }
        return false;
    }
}

let matrix = [[10, 20, 30, 40], [15, 25, 35, 45], [27, 29, 37, 48], [32, 33, 39, 50]];
let N = 4;
let M = 4;
let X = 48;
const obj = new Solution();
console.log(obj.spirallyTraverse(matrix, N, M, X));