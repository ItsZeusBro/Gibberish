import * as util from "node:util"

export class Gobbledy{
  
  constructor(gook){
    this.queue=[]
    this.gobbledy(gook)
  } 

  gobbledy(gook, n){
    if(gook && n){
      if(Array.isArray(gook)){
        this.queue.push(gook)
        for(var i = 0; i<gook.length; i++){
          this.gobbledy(gook[i], n-1)
        }
      }else if(typeof gook === 'object'){
        this.queue.push(gook)
        var keys = Object.keys(gook)
        if(keys.length){
          for(var i = 0; i<keys.length; i++){
            this.gobbledy(gook[keys[i]], n-1)
          }
        }
      }else{
        this.queue.push(gook)
      }
    }else{
      if(Array.isArray(gook)){
        this.queue.push(gook)
        for(var i = 0; i<gook.length; i++){
          this.gobbledy(gook[i])
        }
      }else if(typeof gook === 'object'){
        this.queue.push(gook)
        var keys = Object.keys(gook)
        if(keys.length){
          for(var i = 0; i<keys.length; i++){
            this.gobbledy(gook[keys[i]])
          }
        }
      }else{
        this.queue.push(gook)
      }
    }
    return
  }

  next(n){
    var q = []
    for(var i=0; i<n; i++){
      q.push(this.queue.shift())
    }
    return q
  }
  log(obj){
    if(obj){
        console.log(util.inspect(obj, false, null, true))
    }
}

  validate(){
    //we want to validate schema vertically using recursion and some schema pattern matching

  }
}





// var gg = new Gobbledy(gook)
// console.log(gg.queue)

// while(true){
//   var next = gg.next()
//   if(next){
//     console.log(next)
//   }else{
//     break
//   }
// }