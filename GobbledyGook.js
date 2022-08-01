class Gobbledy{
  
  constructor(gook){
    this.queue=[]
    this.gobbledy(gook)
  } 

  gobbledy(gook){

    if(gook){
      if(Array.isArray(gook)){
        for(var i = 0; i<gook.length; i++){
          this.queue.push(gook)
          this.gobbledy(gook[i])
        }
      }else if(typeof gook === 'object'){
        var keys = Object.keys(gook)
        for(var i = 0; i<keys.length; i++){
          this.queue.push(gook)
          this.gobbledy(gook[keys[i]])
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
        'a':[1, {}]
      },
      {
        'b':[{}],
        'a':[{}]
      }
    ]
  },
  {
    'a':[
      {
        'a':[1, {}]
      },
      {
        'b':[{}],
        'a':[{}]
      }
    ]
  }
]

var gg = new Gobbledy(gook)
console.log(gg.queue)