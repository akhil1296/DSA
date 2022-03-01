/**
 * Given a 5x6 snakes and ladders board, find the minimum number of dice throws required to reach the destination or last cell (30th cell) from the source (1st cell).

You are given an integer N denoting the total number of snakes and ladders and an array arr[] of 2*N size where 2*i and (2*i + 1)th values denote the starting and ending point respectively of ith snake or ladder. The board looks like the following.


                                   

Example 1:

Input:
N = 8
arr[] = {3, 22, 5, 8, 11, 26, 20, 29, 
       17, 4, 19, 7, 27, 1, 21, 9}
Output: 3
Explanation:
The given board is the board shown
in the figure. For the above board 
output will be 3. 
a) For 1st throw get a 2. 
b) For 2nd throw get a 6.
c) For 3rd throw get a 2.

Your Task:
You do not need to read input or print anything. Your task is to complete the function minThrow() which takes N and arr as input parameters and returns the minimum number of throws required to reach the end of the game.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N)


Constraints:
1 ≤ N ≤ 10
1 ≤ arr[i] ≤ 30  


 */
 
 
class Cell{
    constructor(){
        this.position = 0;
        this.hop = 0;
    }
}
class SnakeAndLadder{
    minThrow(n, arr, len){
        let positionArray = new Array(len).fill(-1);
        let visited =  new Array(len).fill(false);
        for(let i = 0 ; i < arr.length ; i = i + 2){
            positionArray[arr[i] - 1] = arr[i+1] - 1 ;
        }
         
        let queue = [];
         
        let firstCell = new Cell();

        firstCell.position = 0 ;
        firstCell.hop = 0 ;
        queue.push(firstCell);

        visited[0] = true;
        let cell;

        while( queue.length ){
            cell = queue.shift();
            let index = cell.position;
            if(index === len-1){
                break;
            }
            for( let i = index + 1 ; i <= index+6 && i<len ; i++ ){
                    if(!visited[i]){
                        let newCell = new Cell();
                        newCell.hop = newCell.hop + 1 ;
                        visited[i] = true;
                        // means snake and ladder is present
                        if(positionArray[i] !== -1 ){
                            newCell.position = positionArray[i];
                        }
                        else{
                            newCell.position = i ;
                        }
                        queue.push(newCell);
                        console.log(queue);
                        break;
                    }
                    console.log(cell.hop);
            }
        }
        return cell.hop;
    }
}

 let N = 8
 let len = 30;
 let arr = [3, 22, 5, 8, 11, 26, 20, 29, 
        17, 4, 19, 7, 27, 1, 21, 9];
const obj = new SnakeAndLadder();
let res = obj.minThrow(N, arr, len);
console.log(res);