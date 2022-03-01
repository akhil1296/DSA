class TravellingSalesman{
    tsp(dist, setOfCities, city, n, dp){
        if(setOfCities === (1<<n) - 1){
            return dist[city][0];
        }
        if(dp[setOfCities][city] !== -1){
            return dp[setOfCities][city];
        }
        let ans = Number.MAX_VALUE;
        for(let choice = 0 ; choice < n ; choice++){
            
            if((setOfCities & (1<<choice)) === 0){
                let sub = dist[city][choice] + this.tsp(dist, setOfCities | (1<<choice), choice, n, dp);
                ans = Math.min(ans, sub);
            }
        }
        dp[setOfCities][city] = ans;
    return ans;
    }
}

let dist = [[0, 20, 42, 25],
            [20, 0, 30, 34],
            [42, 30, 0, 10],
            [25, 34, 10, 0]];
let n = 4 ;
let dp = new Array(1<<n).fill(-1).map(()=> new Array(n).fill(-1));
console.log(1<<n); // 0001 << 4 =  10000 = 2^4 = 16

const graph = new TravellingSalesman();
let ans = graph.tsp(dist, 1, 0, n, dp);
console.log(ans);