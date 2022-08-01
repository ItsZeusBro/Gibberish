class Gobbledy{
  
  constructor(gook){
    this.queue=[]
    this.gobbledy(gook)
  } 

  gobbledy(gook){
    if(gook){
      console.log(gook)
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
        //raw type
        this.queue.push(gook)
      }
    }
    return
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

var gg = new Gobbledy(gook)
console.log(gg.queue)