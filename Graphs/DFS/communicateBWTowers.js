class CommunicateBetweenTowers{
    constructor(grid){
        this.grid =  grid ;
        this.row = grid.length ;
        this.col = grid[0].length ;
        this.visited = new Array(this.row).fill(false).map(() => new Array(this.col).fill(false));
    }
    dfs(x, y){
        if(this.visited[x][y]){
            return;
        }
        this.visited[x][y] = true;
        for(let i = 0 ; i < this.row ; i++){
            if(this.grid[i][y] === 1){
                this.dfs(i, y);
            }
        }
        for(let i = 0 ; i < this.col ; i++){
            if(this.grid[x][i] === 1){
                this.dfs(x, i);
            }
        }

    }

    solve(){
        let ans = 0 ;
        for(let i = 0 ; i < this.row ; i++){
            for (let j = 0 ; j < this.col ; j++){
                 if(this.visited[i][j]){
                     continue;
                 }
                 else{
                     ans++;
                     this.dfs(i, j);
                 }
            }
        }
        return ans;
    }
}

let grid = [[1, 0], [1, 1]];
const obj = new CommunicateBetweenTowers(grid);

let ans = obj.solve();
console.log(ans)