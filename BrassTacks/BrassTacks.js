class BrassTacks{
    constructor(n, limit){
        this.tree={}
        this.limit=limit
        this.bStrings=[]
        this.dStrings=[]
        this.BStrings('1', n)
        this.BTT(this.tree)
        this.dStrings = this.dStrings.sort(function(a, b) {
            return a - b;
        })
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

    BStrings(bString, n){
        if(n==0){
            return
        }else{
            if(this.isBT(bString.slice()+'0')){
                this.bStrings.push(bString.slice()+'0')
                this.dStrings.push(parseInt(bString.slice()+'0', 2))
                this.BStrings(bString.slice()+'0',  n-1)
            }
            if(this.isBT(bString.slice()+'1')){
                this.bStrings.push(bString.slice()+'1')
                this.dStrings.push(parseInt(bString.slice()+'1', 2))
                this.BStrings(bString.slice()+'1',  n-1)
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
        //takes the first position and checks against the second
        //takes the first two and checks against the next two
        //takes the first three and checks against the next three, etc...
        for(var i = 0; i<Math.ceil(string.length/2); i++){
            if(string.slice(0, i+1)===string.slice(i+1, (i+1)*2)){
                return true
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