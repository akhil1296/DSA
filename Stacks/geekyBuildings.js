class Solution {
    constructor() {
        this.stack = [];
    }
    isEmpty() {
        return this.stack.length === 0 ? true : false;
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    recreationalSpot(arr, n) {
        //code here

        // if stack is empty, push the element
        // then check next element is > peek ? 
        // if true then push
        // else pop till stack is not empty and then push
        // if length === 2 then compare first and second element with the incoming element
        for (let i = 0; i < n; i++) {
            let element = arr[i];
            if (this.isEmpty()) {
                this.stack.push(element);
                continue;
            }
            if (this.stack.length === 2) {
                if (this.stack[0] < element && this.stack[1] > element && this.stack[0] < this.stack[1]) {
                    this.stack.push(element);
                    console.log('Stack : ', this.stack);
                    return 'True';
                }
                if (element > this.peek()) {
                    this.stack.pop();
                    this.stack.push(element);
                    continue;
                }
            }

            if (element > this.peek()) {
                this.stack.push(element);
                continue;
            }
            if (this.peek() === element) {
                continue;
            }

            if (this.peek() > element) {
                while (!this.isEmpty()) {
                    this.stack.pop();
                }
                this.stack.push(element);
            }

        }
        console.log(this.stack);
        return 'False';
    }
}

let solution = new Solution();
// let x = solution.recreationalSpot([4, 7, 11, 5, 13, 2], 6);
let x = solution.recreationalSpot([5, 4, 3, 2, 1], 5);
// let x = solution.recreationalSpot([11, 11, 12, 9], 6);
// let x = solution.recreationalSpot([1, 2, 3, 14, 2], 5);

console.log(x);

// class Solution
// {
//     static boolean recreationalSpot(int[] arr , int n)
//     {
//         if (n < 3)
//             return false;
//         Stack < Integer > stack = new Stack < > ();
//         int[] temp = new int[n];
//         temp[0] = arr[0];
//         for(int i = 1; i <n; i++)
//             temp[i] = Math.min(temp[i - 1], arr[i]);
        
//         for (int j = n - 1; j >= 0; j--)
//         {
//             if (arr[j] > temp[j]) 
//             {
//                 while (!stack.empty() && stack.peek() <= temp[j])
//                     stack.pop();
//                 if (!stack.empty() && stack.peek() < arr[j])
//                     return true;
//                 stack.push(arr[j]);
//             }
//         }
//         return false;
//     }
// }
