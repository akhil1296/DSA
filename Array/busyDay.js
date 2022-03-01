function busyDay(arr){
    // 1. Sort it on the basis of end time
    arr.sort((a, b)=> {
        return a[1] - b[1] ;
    });

    console.log(arr);

    let count = 1 ;
    let finish = arr[0][1] ;

    for(let i = 1; i < arr.length ; i++){
        if(arr[i][0] >= finish){
            count++;
            finish = arr[i][1] ;
        }
    }

    return count;
}

let arr = [[7,9], [0, 10], [4, 5] ,[8, 9], [4, 10], [5, 7]];
console.log(busyDay(arr));

// [ [ 4, 5 ], [ 5, 7 ], [ 7, 9 ], [ 8, 9 ], [ 0, 10 ], [ 4, 10 ] ]
/**
 * finsh = 5 7 9 
 */