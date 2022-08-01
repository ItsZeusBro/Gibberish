//rules
//1. there are n number of levels before base cases are allowed 
//2. every level is either an array of objects and arrays, or an object of objects and arrays
//3. there are min number of elements per level and max number of elements per level
//4. base cases can be any char in a set, or null values, or undefined, or whatever doesnt
// have a key if its a object, or whatever doesnt have elements if its an array

export class Rand{
    constructor(){
        this.rand=this
    }
    Str(min=0, max=this.rand.Int(100)){return this.rand._Str(this.rand.Range(min, max))}
    Int(min=0, max=this.rand.Int(100)){return this.rand.Range(min, max)}
    Arr(min=0, max=this.rand.Int(100)){var arr=[]; for(var i=0;i<max;i++){arr.push(this.rand.thing())}; return arr}
    thing(min=0, max=this.rand.Int(20)){
        return[
            this.rand.IntArr, this.rand.Str, this.rand.Int, this.rand.Enc, this.rand.EncArr, this.rand.StrArr,
            this.rand.Obj, this.rand.ObjArr
        ].sample()(min, max)
    }
    IntArr(min=0, max=this.rand.Int(100)){var arr=[]; for(var i=0;i<max;i++){arr.push(this.rand.Int(min, max))}; return arr}
    Enc(){return "utf8"}
    EncArr(){return ['utf8']}
    StrArr(min=0, max=this.rand.Int(100)){var arr=[]; for(var i=0;i<max;i++){arr.push(this.rand.Str(min, max))}; return arr}
    Obj(min=0, max=this.rand.Int(10)){if(max){return {[this.rand.Str()]:this.rand.Obj(min, max-1)}}else{return {}}};
    ObjArr(min=0, max=this.rand.Int(10)){var arr=[]; for(var i=0;i<max;i++){arr.push(this.rand.Obj())}; return arr}
    Selection(bag){
        return bag[Math.floor(Math.random() * bag.length)];
    }
    Range(min, max){
        return Math.floor(Math.random()*(max-min+1)+min)
    }
    _Str(len, chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'){
        //programiz.com
        var str='';
        for (var i = 0; i<len; i++){str+=chars.charAt(Math.floor(Math.random()*chars.length))}
        return str;
    }
    Mod10(){
        return Math.floor(Math.random()*(100-0+1)+0)%2
    }
}

class Gen{
    constructor(nLevels, minElements, maxElements, minString, maxString, keyStringMin, keyStringMax){
        
        this.gen(
            nLevels, 
            minElements, maxElements, 
            minString, maxString, 
            keyStringMin, keyStringMax
        )

    }

    gen(){
        
    }
}

