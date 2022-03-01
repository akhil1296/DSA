/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
class Solution {
  // Function to check if brackets are balanced or not.
  // eslint-disable-next-line class-methods-use-this
  ispar(x) {
    const allowedBrackets = ['[', '{', '(', ')', '}', ']'];
    const stack = [];

    const bracketsMap = new Map();
    bracketsMap.set('[', ']');
    bracketsMap.set('{', '}');
    bracketsMap.set('(', ')');
    const openingBracketsArray = [...bracketsMap.keys()];
    const closingBracketsArray = [...bracketsMap.values()];
    // your code here
    for (let i = 0; i < x.length; i++) {
      const element = x.charAt(i);
      const stackSize = stack.length - 1;
      if (allowedBrackets.includes(element)) {
        if (openingBracketsArray.includes(element)) {
          stack.push(element);
        }
        if (closingBracketsArray.includes(element) && (stackSize !== -1)) {
          const poppedElement = stack[stackSize];
          const closedBracket = bracketsMap.get(poppedElement);
          if (closedBracket === element) {
            stack.pop();
          } else {
            break;
          }
        } else if (stack.length === 0) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }
}
