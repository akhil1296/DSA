const heap = [
    70, 45, 31, 17,  6, 23, 22,
    15,  8,  3,  1, 13,  5, 10,
    16,  4,  9
  ];

let size = heap.length;
 const height = (n) => {
     return Math.ceil((Math.log(n+1)/Math.log(2))) - 1;
 }

 console.log(height(size));
