class RatInMaze {
    solveMaze(maze, n) {
        let arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
        if (!this.isSolveUtil(maze, 0, 0, n, arr)) {
            console.log('solution D.N.E. ');
            return false;
        }

        console.log("Print Solution : ", arr);
        return true;
    }
    isSolveUtil(maze, x, y, n, arr) {

        if (x === n - 1 && y === n - 1 && maze[x][y] === 1) {
            arr[x][y] = 1;
            return true;
        }

        if (this.isSafe(maze, x, y, n)) {
            if (arr[x][y] === 1) {
                return false;
            }
            arr[x][y] = 1;

            if (this.isSolveUtil(maze, x + 1, y, n, arr)) {
                return true;
            }
            if (this.isSolveUtil(maze, x, y + 1, n, arr)) {
                return true;
            }
            if (this.isSolveUtil(maze, x - 1, y, n, arr)) {
                return true;
            }
            if (this.isSolveUtil(maze, x, y - 1, n, arr)) {
                return true;
            }
            arr[x][y] = 0;
            return false;

        }
        return false;
    }
    isSafe(maze, x, y, n) {
        return (x >= 0 && x < n) && (y >= 0 && y < n) && (maze[x][y] === 1);
    }

}

const obj = new RatInMaze();
let maze = [[1, 0, 0, 0],
[1, 1, 0, 1],
[0, 1, 0, 0],
[1, 1, 1, 1]];

obj.solveMaze(maze, maze.length);