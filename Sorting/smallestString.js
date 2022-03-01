function smallest(arr){
    arr.sort((a,b) => { 
        return (a+b).localeCompare(b+a) ;
    });
    return arr.join("");
}

let arr = ['c', 'cb', 'cba'];
console.log(smallest(arr));