import * as util from "node:util"

export class Gobbledy{
  
  constructor(gook){
    this.rawQ=[]
    this.gobbledy(gook)
  } 

  gobbledy(gook, n){
      this.rawQ.push(gook)
      if(gook){
          //what is the condition to push to the queue? this.queue.push(gook)
          if(Array.isArray(gook)){
              for(var i = 0; i<gook.length; i++){
                  this.gobbledy(gook[i])
              }
          }else if(typeof gook === 'object'){
              var keys = Object.keys(gook)
              if(keys.length){
                for(var i = 0; i<keys.length; i++){
                    this.gobbledy(gook[keys[i]])
                }
              }
          }
      }
    return
  }

  itercursion(){
    //performs schema analysis on this.rawQ
    //we need to reform the queue to create full schema paths
  }

  next(n){
    var q = []
    for(var i=0; i<n; i++){
        q.push(this.rawQ.shift())
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

var gook = [
  {
    'a':[
      {
        'b':[1, {}]
      },
      {
        'c':[{}],
        'd':[{}]
      }
    ]
  },
  {
    'e':[
      {
        'f':[1, {}]
      },
      {
        'g':[{}],
        'h':[{}]
      }
    ]
  }
]
var g = new Gobbledy(gook)
g.log(g.rawQ)