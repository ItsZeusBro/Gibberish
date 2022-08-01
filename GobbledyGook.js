import * as util from "node:util"

export class Gobbledy{
  
  constructor(gook, n=[Infinity]){
    this.queue=[gook]
    this.gobbledy(gook, [n])
  } 

  gobbledy(gook, n){
      if(gook && n[0]){
          //what is the condition to push to the queue? this.queue.push(gook)
          if(Array.isArray(gook)){
              n[0]=n[0]-1              //THIS MUST STAY HERE FOR VARIOUS REASONS
              for(var i = 0; i<gook.length; i++){
                  this.gobbledy(gook[i], n)
              }
          }else if(typeof gook === 'object'){
              n[0]=n[0]-1              //THIS MUST STAY HERE FOR VARIOUS REASONS
              var keys = Object.keys(gook)

              if(keys.length){
                for(var i = 0; i<keys.length; i++){
                    this.gobbledy(gook[keys[i]], n)
                }
              }
          }

      }else{
        this.queue.push(gook)
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
var g = new Gobbledy(gook, 4)
g.log(g.queue)