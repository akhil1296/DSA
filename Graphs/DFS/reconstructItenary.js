/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
 var findItinerary = function(tickets) {
    let adj = {};
    // creating the adj list
    tickets.forEach((ticket)=>{
       if(!adj[ticket[0]]){
           adj[ticket[0]] = [];
       } 
        adj[ticket[0]].push(ticket[1]);
    });
    
    // sorting it lexicographically
    
    for(let ticket in adj){
        adj[ticket].sort();
    }
    
    let res = [];
    function dfs(ticket){
        let parent = adj[ticket];
        while(parent && parent.length){
            dfs(parent.shift());
        }
        res.push(ticket);
        
    }
    dfs("JFK");
    res.reverse();
    return res;
};