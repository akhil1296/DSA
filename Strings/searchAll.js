class SearchAll {
    checkFunctions() {
        let str = "I liked the movie, acting in movie was great!";
       
        let searchWord = "movie";
        let res = [];
       
        let index = str.indexOf('movie');
        console.log(index);
        
        while (index != -1) {
            res.push(index);
            index = str.indexOf(searchWord, index+1);
            console.log(index);
        }
        console.log(res);
    }

}

const obj = new SearchAll();
obj.checkFunctions();