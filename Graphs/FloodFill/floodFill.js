/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] == newColor) return image ;
    let originalColour = image[sr][sc] ;
    if(image[sr][sc] === originalColour){
        dfs(image, sr, sc, newColor, originalColour, image.length, image[0].length);
    }
    return image;
};

function dfs(image, sr, sc, newColour, originalColour, m, n){
    image[sr][sc] = newColour ;
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];
    for(let k = 0 ; k < 4 ; k++){
        let nx = sr + dx[k] ;
        let ny = sc + dy[k] ;
        if(nx >= 0 && nx < m && ny >= 0 && ny < n && image[nx][ny] === originalColour ){
           dfs(image, nx, ny, newColour, originalColour, m, n);
        }
    }
    
}
let image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2 ;
const res = floodFill(image, sr, sc, newColor);
console.log(res);