class MultiBFS{
    
    main(grid){
        let m = grid.length ;
        let n = grid[0].length ;
        
        let dist = new Array(m).fill(Number.MAX_VALUE).map(()=> new Array(n).fill(Number.MAX_VALUE));
        let q = [] ;
        for(let i = 0 ; i < m ; i++){
            for(let j = 0 ; j < n ; j++){
                if(i ===0 && grid[i][j] === 1){
                    q.push({ x : i , y : j});
                    dist[i][j] = 0 ;
                }
            }    
        }

        let dx = [0, 0, 1, -1] ;
        let dy = [1, -1, 0, 0] ;

        while(q.length){
            let parentNode = q.shift();
            let x = parentNode.x ;
            let y = parentNode.y ;

            for(let k = 0 ; k < 4 ; k++){
                let nx = x + dx[k] ;
                let ny = y + dy[k] ;
                if(nx >= 0 && nx < m && ny >= 0 && ny < n && dist[nx][ny] === Number.MAX_VALUE && grid[nx][ny] === 1){
                    dist[nx][ny] = dist[x][y] + 1 ;
                    q.push({ x : nx , y : ny});
                }
            }
        }
        // for(let i = 0 ; i < m ; i++){
        //     for(let j = 0 ; j < n ; j++){
        //         if (dist[i][j] === Number.MAX_VALUE){
        //             dist[i][j] = '#' ;
        //         }
        //     }
        // }
        let min =  Number.MAX_VALUE ;
        for(let j = 0 ; j < n ; j++){
            min = Math.min(min, dist[n-1][j]);
        }
        return min ;
    }
}

let grid = [
    [ 0, 1, 0, 1, 1, 0 ],
    [ 0, 1, 1, 0, 1, 0 ],
    [ 0, 1, 1, 1, 1, 0 ],
    [ 0, 1, 1, 0, 1, 0 ],
    [ 0, 0, 1, 0, 0, 0 ],
    [ 1, 0, 1, 0, 0, 1 ]
  ] ;
const obj = new MultiBFS();
let ans = obj.main(grid);
console.log(ans);
