class RunningArray {
    median(arr) {
        let res = [];
        let med = arr[0];
        let smaller = [];
        let greater = [];

        smaller.push(arr[0]);

        for (let i = 1; i < arr.length; i++) {
            let x = arr[i];
            if (smaller.length > greater.length) {
                if (x < med) {
                    smaller.sort(function (a, b) { return b - a; });

                    greater.push(smaller.shift());
                    smaller.push(x);
                }
                else { 
                    greater.push(x); 
                }
                    smaller.sort(function (a, b) { return b - a; });
                    greater.sort(function (a, b) { return a - b; });
                    med = (smaller[0] + greater[0]) / 2;
            }
            else if(smaller.length == greater.length)
            {
                if(x < med)
                {
                    smaller.push(x);
                    smaller.sort(function(a,b){return b-a;});
         
                    med = smaller[0];
                }
                else
                {
                    greater.push(x);
                     
                    greater.sort(function(a,b){return a-b;});
                    med = greater[0];
                }
            }
               
            // case3(right side heap has more elements)
            else
            {
                if(x > med)
                {
                 
                    greater.sort(function(a,b){return a-b;});
                    smaller.push(greater.shift());
                    greater.push(x);
                }
                else
                {
                    smaller.push(x);}
                    smaller.sort(function(a,b){return b-a;});
         
                    med = (smaller[0] + greater[0])/2;
                   
            }
           res.push (med);
        }
        return res;
    }
}

let arr = [10, 5, 2, 3, 0, 12, 18, 20, 22];
let obj = new RunningArray();
let ans = obj.median(arr);
console.log(ans);