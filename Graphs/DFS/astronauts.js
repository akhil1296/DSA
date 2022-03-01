/**
 * Finding Astronauts from different countries
Difficulty Level : Hard
Last Updated : 07 Jul, 2021
Given a positive integer N denoting the number of astronauts(labelled from 0 from (N – 1))and a matrix mat[][] containing the pairs of astronauts that are from the same country, the task is to count the number of ways to choose two astronauts from different countries.
 */
class Astronaut{
    dfs(node){
        this.visited[node] = true ;
        this.count++;
        this.adjList[node].forEach((neighbour)=>{
            if(!this.visited[neighbour]){
                this.dfs(neighbour);
            }
        });
    }
    numberOfPairs(n , pairs){
        let totalWays = (n * (n-1)) / 2 ;
        this.adjList = {};
        // adding vertex
        for(let i = 0 ; i < n ; i++ ){
            if(!this.adjList[i]){
                this.adjList[i] = [];
            }
        }
        // creating adjList i.e., Graph
        for( const [u,v] of pairs ){
           this.adjList[u].push(v);
           this.adjList[v].push(u);
        }
        this.visited = new Array(n).fill(false);
        this.count = 0 ;
        let connectedComponents = [];
        for(let i = 0 ; i < n ; i++ ){
            if(!this.visited[i]){
                this.dfs(i);
                connectedComponents.push(this.count);
            }
            this.count = 0 ;
        }
        connectedComponents.forEach((n)=>{
            let ways = (n * (n-1)) / 2 ;
            totalWays = totalWays - ways;
        });
        return totalWays;
    }
}

// let N = 6;
// let pairs = [[0, 1 ], [ 0, 2 ], [ 2, 5 ] ];

let N = 5 ;
let pairs = [[0, 1 ], [ 2, 3 ], [ 0, 4 ] ];

const obj = new Astronaut();
const res = obj.numberOfPairs(N, pairs);
console.log(res);