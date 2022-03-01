class HashTable{
    constructor(size = 53){
        this.keyMap = new Array(size);
    }

    __hashKey(key){
        let total = 0;
        let weirdPrime = 31;
        for(let i = 0 ; i < Math.min(key.length, 100) ; i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = ( total * weirdPrime + value) % this.keyMap.length;
        }
        console.log("total : ", total);
        return total;
    }

    set(key, value){
        let index = this.__hashKey(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key){
        let index = this.__hashKey(key);
        if(this.keyMap[index]){
           for(let i = 0 ; i < this.keyMap[index].length; i++){
               if(this.keyMap[index][i][0] === key){
                   return this.keyMap[index][i][1];
               }
           }
        }
        return undefined;
    }
}

let ht = new HashTable(17);
ht.set("marron", "#08008080");
ht.set("green", "#06758080");
ht.set("red", "#0907080");
ht.set("blue", "#080324");
ht.set("black", "#08008760");
console.log(ht.get(('black')));