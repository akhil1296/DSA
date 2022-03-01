class UniquePaths{
   constructor(n, maxLength){
       this.count = 0;
       this.arr = Array.from(Array(2*n), () => new Array());
   }
   printMatrix(matrix, m, n, i, j, path, index){
     path[index] = matrix[i][j];
     // Reached the bottom of the matrix so we are left with
     // only option to move right
     if( i === m-1){
        for(let k = j + 1 ; k < n ; k++){
            path[index + k - j] =  matrix[i][k];
        }
        for(let l = 0 ; l < path.length ; l++){
            // console.log( "FROM 1ST",path[l]);
            (this.arr[this.count]).push(path[l]);
        }
        this.count++;
        return;

     }
     // Reached the right corner of the matrix we are left with
     // only the downward movement.
     if( j === n-1){
        for(let k = i + 1 ; k < m ; k++){
            path[index + k - i] =  matrix[k][j];
        }
        for(let l = 0 ; l < path.length ; l++){
            // console.log("FROM 2ND", path[l]);
            (this.arr[this.count]).push(path[l]);
        }
        this.count++;
        return;
     }
     // Print all the paths that are possible after moving down
     this.printMatrix(matrix, m, n, i+1, j, path, index+1);
      
     // Print all the paths that are possible after moving right
     this.printMatrix(matrix, m, n, i, j+1, path, index+1);
   }
   print(){
       console.log(this.arr);
   }
}

let row = 3 ;
let col = 3 ;
let matrix = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]];
let maxLength = row + col - 1;
const obj = new UniquePaths(3, maxLength);
obj.printMatrix(matrix, row, col, 0, 0, new Array(maxLength), 0);
obj.print();