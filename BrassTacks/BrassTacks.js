export class BrassTacks{
    constructor(levels, limit){
        // this.tree={}
        // this.limit=limit
        // this.bStrings=[]
        // this.dStrings=[]
        // this.BStrings('1', levels)
        // this.BTT(this.tree)
        // this.dStrings = this.dStrings.sort(function(a, b) {
        //     return a - b;
        // })
    }
    BTT(tree){
        for(var i = 0; i<this.bStrings.length; i++){
            var tr=tree
            var string = this.bStrings[i]
            for(var j=0; j<string.length; j++){
                var char = string[j]
                if(!tr[char]){
                    tr[char]={}
                }
                    tr=tr[char]
            }
        }
    }

    BStrings(bString, levels){
        if(levels==0){
            return
        }else{
            if(this.isBT(bString.slice()+'0')){
                this.bStrings.push(bString.slice()+'0')
                this.dStrings.push(parseInt(bString.slice()+'0', 2))
                this.BStrings(bString.slice()+'0',  levels-1)
            }
            if(this.isBT(bString.slice()+'1')){
                this.bStrings.push(bString.slice()+'1')
                this.dStrings.push(parseInt(bString.slice()+'1', 2))
                this.BStrings(bString.slice()+'1',  levels-1)
            }
        }
    }

    isBT(bString){
        if(!this.isRecursive(bString)){
            if(!this.isOverLimit(bString)){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }

    isOverLimit(bString){
        //look in reverse order until char changes and keep isOverLimit counter
        var char=bString[bString.length-1]
        var c=0;
        for(var i = bString.length-1; i>=0; i--){
            if(char!=bString[i]){
                break
            }
            if(char==bString[i]){
                c++;
            }
        }
        if(c>this.limit){
            return true
        }else{
            return false
        }
    }

    isRecursive(string){
        var subStr1=string[0]
        var subStr2=""
        if(string[0]==string[1]){
            return true
        }
        for(var i = 1; i<string.length; i++){
            //we want the first token which is defined as when the first char
            //no longer equals the iterative char, and terminate when the iterative 
            //char again equals the first char
            subStr1+=string[i]
            if(subStr1[i]!=subStr1[i-1]){
                //this means the context changed, but subStr1 is not done
                for(var j = i+1; j<string.length; j++){
                    subStr1+=string[j]
                    if(subStr1[j]!=subStr1[j-1]){
                        subStr2+=subStr1[subStr1.length-1]
                        subStr1 = subStr1.slice(0, -1)
                        //now we fill substr2
                        for(var k=j+1; k<string.length; k++){
                            subStr2+=string[k]
                            if(subStr1===subStr2){

                                return true
                            }
                        }
                        return false
                    }
                }
                return false
            }
        }
        return false
    }

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
    primPattAbstract(array){
        var abs=[]
        array = array.sort(function(a, b) {
            return a - b;
        })
        var j=0;
        for(var i=1; i<array.length; i++){
            abs.push(array[i]-array[j])
            j++
        }
        return abs
    }
}


var bt = new BrassTacks(5, 10)
console.log(bt.isRecursive('1000010000'))