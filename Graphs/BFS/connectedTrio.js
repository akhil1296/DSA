/**
 * 1761. Minimum Degree of a Connected Trio in a Graph
Hard

107

146

Add to List

Share
You are given an undirected graph. You are given an integer n which is the number of nodes in the graph and an array edges, where each edges[i] = [ui, vi] indicates that there is an undirected edge between ui and vi.

A connected trio is a set of three nodes where there is an edge between every pair of them.

The degree of a connected trio is the number of edges where one endpoint is in the trio, and the other is not.

Return the minimum degree of a connected trio in the graph, or -1 if the graph has no connected trios.

 

Example 1:


Input: n = 6, edges = [[1,2],[1,3],[3,2],[4,1],[5,2],[3,6]]
Output: 3
Explanation: There is exactly one trio, which is [1,2,3]. The edges that form its degree are bolded in the figure above.
Example 2:


Input: n = 7, edges = [[1,3],[4,1],[4,3],[2,5],[5,6],[6,7],[7,5],[2,6]]
Output: 0
Explanation: There are exactly three trios:
1) [1,4,3] with degree 0.
2) [2,5,6] with degree 2.
3) [5,6,7] with degree 2.
 

Constraints:

2 <= n <= 400
edges[i].length == 2
1 <= edges.length <= n * (n-1) / 2
1 <= ui, vi <= n
ui != vi
There are no repeated edges.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
 var minTrioDegree = function(n, edges) {
    let adjMat = new Array(n).fill(0).map(()=> new Array(n).fill(0));
    let inDegree = new Array(n).fill(0);
    for(const [x,y] of edges){
        inDegree[x-1]++;
        inDegree[y-1]++;
        adjMat[x-1][y-1] = 1 ;
        adjMat[y-1][x-1] = 1 ;
    }
    let res = Number.MAX_VALUE;
    for( let i = 0 ; i < n ; i++ ){
        for( let j = i+1 ; j < n ; j++){
            for( let k = j+1 ; k < n ; k++){
                if(adjMat[i][j] === 1 && adjMat[j][k] === 1 && adjMat[k][i] === 1){
                    res = Math.min(res, inDegree[i] + inDegree[j] + inDegree[k] - 6);
                }
            }
        }
    }
    if(res === Number.MAX_VALUE){
         res = -1;
    }
    return res;
};

let n = 6;
let edges = [[1,2],[1,3],[3,2],[4,1],[5,2],[3,6]];
const obj = minTrioDegree(n, edges);
console.log(obj);
