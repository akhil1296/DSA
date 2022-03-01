class Basics{
    checkFunctions(){
        let str = "I am a disco am a dancer." ;
        let len = str.length ;
        let upper = str.toUpperCase();
        let lower = upper.toLowerCase();
        let check = str.includes('I');
        console.log(len, upper, lower, check);
        let checkFirst = str.startsWith('p');
        let checkLast = str.endsWith('dancer.');
        console.log(checkFirst, checkLast);
        let search = str.search(/I/g); // returns -1 if word not present
        console.log('search ------> ',search);
        let match = str.match(/am/g);
        console.log('Match : ', match);
        let index = str.indexOf('a');
        console.log('index of :', index);
        let lastIndexOf = str.lastIndexOf('a');
        console.log('last index  of :', lastIndexOf);
        let replacedString = str.replace('am','are'); // but getting replaced at only 1 position
        console.log(replacedString);
        let x = str.replace(/am/g, "are");
        console.log(x);
        console.log("trim :", "   kl     ".trim());
        index = str.charAt(10);
        console.log("char at :",index);
        index = str.charCodeAt(10);
        console.log("charcode  at :",index);
        console.log("fromcharcode  at :", String.fromCharCode(90));
        console.log(str.concat("yoohoo"));
        console.log(str.split(' ')); // split it on the basis of space
        console.log(str.repeat(2));
        console.log(str.slice(2, 8));
        console.log(str.slice(-5)); // shows last 5 characters
        console.log(str.slice(-8, -5));
        console.log('substr', str.substr(2, 5)); // inclusiv end
        console.log('substring', str.substring(2, 5)); // exclusive end
        console.log("value of : ", str.valueOf());
        console.log("30n".toString() + 20);
    }

}

const obj = new Basics();
obj.checkFunctions();