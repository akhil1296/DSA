class GridPath{
  shortestPath(grid){

    let m =  grid.length;
    let n = grid[0].length;

    let dist = new Array(m).fill(Number.MAX_VALUE).map(() =>
        new Array(n).fill(Number.MAX_VALUE)
    );

    let src = grid[0][0] ;
    dist[0][0] = src ;

    let set = new Set();
    set.add({ x : 0, y : 0, wt: src });

    let dx = [0, 0, 1, -1] ;
    let dy = [1, -1, 0, 0] ;

    while(set.size){
        let node = set.values().next().value;
        let x = node.x;
        let y = node.y;
        let z = node.wt;
        set.delete(node);
       
        for(let k = 0 ; k < 4 ; k++){
            
            let nx = x + dx[k] ;
            let ny = y + dy[k] ;
    
            if(nx >= 0 && nx < m && ny >= 0 && ny < n && (z + grid[nx][ny]) < dist[nx][ny]){

                if(set.has({x : nx, y : ny, wt: dist[nx][ny]})){
                    set.delete({x : nx, y : ny, wt: dist[nx][ny]});
                }

                dist[nx][ny] = z + grid[nx][ny] ;
                let q = { x : nx, y : ny, wt: dist[nx][ny] } ;

                let ar = Array.from(set);
                ar.push(q);
        
                ar.sort((a, b)=> {
                    return a.wt - b.wt ;
                });
                set = new Set(ar);
            }
        }
    }
    console.log(dist);
    return dist[m-1][n-1];
  }
}
let grid = [[31, 100, 65, 12, 18],
            [10, 13, 47, 157, 6],
            [100, 113, 174, 11, 33],
            [88, 124, 41, 20, 140],
            [99, 32, 111, 41, 20]];

const obj = new GridPath();
let ans = obj.shortestPath(grid);
console.log(ans);