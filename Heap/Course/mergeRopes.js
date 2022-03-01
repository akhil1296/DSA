// { Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = readLine().split(" ").map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.minCost(arr,n);
    console.log(res.toString());

  }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {
    minCost(arr, n) {

        //code here
        let cost = 0;
        let minHeap = new Array(n).fill(Number.MIN_VALUE);
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i] > minHeap[0]){
                minHeap[0] = arr[i];
                this.heapify(minHeap, 0, n);
            }
        }
        minHeap.sort((a,b)=>{
                return a - b ;
            });
        while(minHeap.length > 1){
            let first = minHeap.shift();
            let second = minHeap.shift();
            cost = cost + first + second;
            minHeap.unshift(first + second);
            this.heapify(minHeap, 0, minHeap.length);
            minHeap.sort((a,b)=>{
                return a - b ;
            });
        }
        
        return cost;
    }
  
    heapify(arr, i, k) {
        // min heap
        let smallest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        if (left < k && arr[left] < arr[smallest]) {
            smallest = left;
        }
        if (right < k && arr[right] < arr[smallest]) {
            smallest = right;
        }
        if (i !== smallest) {
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
            this.heapify(arr, smallest, k);
        }
    }
}