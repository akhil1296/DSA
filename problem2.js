/**
 * Given an array arr containing N words consisting of lowercase characters. Your task is to find the most frequent word in the array. If multiple words have same frequency, then print the word whose first occurence occurs last in the array as compared to the other strings with same frequency.

Example 1:

Input:
N = 3
arr[] = {geeks,for,geeks}
Output: geeks
Explanation: "geeks" comes 2 times.
Example 2:

Input:
N = 2
arr[] = {hello,world}
Output: world
Explanation: "hello" and "world" both
have 1 frequency. We print world as
its first occurence comes last in the
input array.
Your Task:
Complete mostFrequentWord function which takes array of strings and its length as arguments and returns the most frequent word. The printing is done by the driver code.

Expected Time Complexity: O(N * WORD_LEN).
Expected Auxiliary Space: O(N * WORD_LEN).

Constraints:
1 <= N <= 50000
1 <= |each string| <= 50
Sum of length of every string does not exceed 5*105
 */

/**
 * @param {string[]} arr
 * @param {number} n
 * @returns {string}
*/
class Solution 
{   constructor(){
      this.map = new Map();  
    }
    //Function to find most frequent word in an array of strings.
    mostFrequentWord (arr, n) 
    {
        // code here
        let maxFrequencyWord = arr[0];
        let maxCount = 0;
        arr.forEach((word) => {
            this.frequencyMap(word);
        });
        this.map.forEach((value, key) => {
            if(value >= maxCount){
                maxCount = value;
                maxFrequencyWord = key;
            }
        });
        return maxFrequencyWord;
    }
    frequencyMap(word){
        if(this.map.has(word)){
            let count = this.map.get(word);
            this.map.set(word, count+1);
        }
        else{
            this.map.set(word,1);
        }
    }
}