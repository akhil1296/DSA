// { Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(" ");
        let N = parseInt(input_line[0]);
        let nums = new Array(N);
        input_line = readLine().split(" ");
        for(let i=0;i<N;i++)
            nums[i] = parseInt(input_line[i]);
            
        let obj = new Solution();
        let ans = obj.minSwaps(nums);
        if(ans==-0)
            ans=0;
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} nums
 * @returns {number}
*/
class Solution
{
    //Function to find the minimum number of swaps required to sort the array.
	minSwaps(nums)
	{
		// code here
		let n = nums.length;
		let ap = [];
		for(let i = 0 ; i < nums.length ;i++){
		    ap[i] = {first : nums[i], second : i};
		}
		ap.sort((a, b)=> {
		   return a.first - b.first ; 
		});
		let ans = 0 ;
		
		let visited = new Array(n).fill(false);
		for(let i = 0 ; i < n ; i++){
		    let node = ap[i] ;
		    let oldIndex = node.second ;
		    let newIndex = i ;
		    let cycle = 0 ;
		    if(visited[i] || oldIndex === newIndex){
		        continue;
		    }
		    while(!visited[newIndex]){
		        visited[newIndex] = true ;
		        let nextNode = ap[newIndex].second;
		        newIndex = nextNode;
		        cycle += 1 ;
		    }
		    ans += cycle - 1;
		}
		return ans;
	}
}