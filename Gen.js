//rules
//2. every level is either an array of objects and arrays, or an object of objects and arrays
//3. there are min number of elements per level and max number of elements per level
//4. base cases can be any char in a set, or null values, or undefined, or whatever doesnt
// have a key if its a object, or whatever doesnt have elements if its an array
import * as util from "node:util"
import { Gobbledy } from "./GobbledyGook.js";
class RandGen{
    randStr(){return this.genStr(this.randRange(0, 3))}
    randInt(){return this.randRange(0,3)}
    randArr(n){var arr=[]; for(var i=0;i<n;i++){arr.push(this.rand())}; return arr}
    rand(){
        return[
            this.randIntArr, this.randStr, this.randInt, this.randEnc, this.randEncArr, this.randStrArr,
            this.randObj, this.randObjArr
        ].sample()()
    }
    randIntArr(n=this.randInt()){var arr=[]; for(var i=0;i<n;i++){arr.push(this.randInt())}; return arr}
    randEnc(){return "utf8"}
    randEncArr(){return ['utf8']}
    randStrArr(n=this.randInt()){var arr=[]; for(var i=0;i<n;i++){arr.push(this.randStr())}; return arr}
    randObj(n=this.randInt()){if(n){return {[this.randStr()]:this.randObj(n-1)}}};
    randObjArr(n=this.randInt()){var arr=[]; for(var i=0;i<n;i++){arr.push(this.randObj())}; return arr}
    randSelection(bag){
        return bag[Math.floor(Math.random() * bag.length)];
    }
    randRange(min, max){
        return Math.floor(Math.random()*(max-min+1)+min)
    }
    genStr(len, chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'){
        //programiz.com
        var str='';
        for (var i = 0; i<len; i++){str+=chars.charAt(Math.floor(Math.random()*chars.length))}
        return str;
    }
    randMod10(){
        return Math.floor(Math.random()*(100-0+1)+0)%2
    }
}

class GuardGen{
    constructor(h, w){
        this.h=h
        this.w=w
        this.rg=new RandGen()
        this.g = this.gen(h, w)

        //we want to make sure we find strings that don't start the same way with these two base cases
        //for as many n's as practical
        this.case1='{'
        this.case2='['
        this.notRecrsv=''
        //greedy algorithm should be deterministic and fill this for every n for both [ and {
        this.stringsForN={} //{'n':{'[':'', '{':''}}
    }
    


    brassTacks(n){
        //n is how many of the same token we can have in a row
        //isRecursive checks to see if the string recurrs.
    } 
    isRecursive(string, n){
        //this checks for recurring patterns from the nth position in the string
        
    }


    gen(h, w){
        var schema=[]
        for(var i = 0; i<w; i++){
            schema.push(this._gen(h, this.rg.randRange(1, w), ''))
        }
        return schema
    }


    _gen(h, w, guardFuncStr){
        var block=this.rg.randSelection([[], {}])
        if(h==0){
            return this.baseCase()
        }else{
            if(Array.isArray(block)){
                //if we have a default/function context we simply build and return it
                for(var i=0; i<w;i++){
                    block.push(this._gen(h-1, this.rg.randRange(1, w)))
                }
            }else{
                block[this.rg.randStr()] = this._gen(h-1, this.rg.randRange(1, w))
            }
        }
        //trailing construction case
        return block;
    }


    baseCase(){
        var sel = this.rg.randSelection(['randStr', 'randInt', 'randIntArr', 'randStrArr'])

        if(sel=='randStr'){
            return this.rg.randStr()
        }else if(sel=='randInt'){
            return this.rg.randInt()
        }else if (sel=='randIntArr'){
            return this.rg.randIntArr()
        }else{
            return this.rg.randStrArr()
        }
    }

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}

var gen = new GuardGen(5, 5)
gen.log(gen.g)


var gg = new Gobbledy(gen.g)

