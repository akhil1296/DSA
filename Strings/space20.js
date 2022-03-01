class Space20 {
    checkFunctions() {
        let str = " I liked the movie, acting in movie was great!";
        let res = str.split(' ');
        console.log(res.join('&20'));
    }

}

const obj = new Space20();
obj.checkFunctions();