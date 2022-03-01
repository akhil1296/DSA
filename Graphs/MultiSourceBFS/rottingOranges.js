/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const obj = new RottingOranges();
    let ans = obj.main(grid);
    return ans;
};

class RottingOranges {
    main(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let q = [];
        let orangeCount = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 2) {
                    q.push({ x: i, y: j, time: 0 });
                }
                if (grid[i][j] === 1) {
                    orangeCount++;
                }

            }
        }



        let dx = [0, 0, 1, -1];
        let dy = [1, -1, 0, 0];

        let count = 0;
        let ans = 0;
        while (q.length) {
            let parentNode = q.shift();
            let x = parentNode.x;
            let y = parentNode.y;
            let time = parentNode.time;
            ans = Math.max(ans, time);
            for (let k = 0; k < 4; k++) {
                let nx = x + dx[k];
                let ny = y + dy[k];
                if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1) {
                    q.push({ x: nx, y: ny, time: time + 1 }); count++;
                    grid[nx][ny] = 2;
                }
            }
        }
        if (count !== orangeCount) {
            ans = -1;
        }
        return ans;
    }
}
// let grid = [[0,2]] ;
let grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];
let ans = orangesRotting(grid);
console.log(ans);

