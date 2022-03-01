class MinPages{
    findPages(arr, k){
        // if books are less than the number of students
        if( k > arr.length ){
            return -1 ;
        }
        arr.sort((a, b) => { return a - b ; });
        
        let totalSum = 0 ;
        let n = arr.length ;
        let max = Number.MIN_VALUE;

        for( let i = 0 ; i < n ; i++ ){
            if( arr[i] > max ){
                max = arr[i];
            }
            totalSum = totalSum + arr[i] ;
        }

        let start = max ; // maximum of array
        let end = totalSum ; // total number of students
        let mid = 0 ;
        let result = Number.MAX_VALUE;
        while( start <= end ){
            mid = Math.floor( start - (Math.floor((start - end) / 2))); // at most max pages
            if( this.isPossible(arr, n, k, mid) ){ // if solution exists
                end = mid - 1 ; 
                result = Math.min(result, mid); // store the min pages to reduce the stress
            }
            else{
                start = mid + 1 ;
            }
        }
        return result ;
    }
    isPossible(arr, n, k, maxPages){

        let student = 1 ;
        let sum = 0 ;
        
        for( let i = 0 ; i < n ; i++ ){ // iterate over the books
             sum = sum + arr[i] ; // books student can get
             if( sum > maxPages ){
                student ++ ;
                sum = arr[i] ;
             }
             if( student > k ){ // if number of students are greater than given students
                 return false ;
             }
        }
       return true;
    }
}
//let pages = [ 12, 34, 67, 90 ];
let pages = [10, 20, 30, 40] ;
let students = 2 ;
const obj = new MinPages();
let ans = obj.findPages(pages, students);
console.log(ans);
