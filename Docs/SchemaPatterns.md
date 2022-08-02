## Schema Pattern Algorithm

#### What about schema?
1. what is a good description of any given schema?
2. based on that description is it well formed and consistent?
3. based on its consistency, what is the best way to use it?

We are still answering these questions, GO AWAY!

## General Base Algorithm
      
      
        gobbledy(gook){
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
      
      On this schema
      var gook = [
        {
          'a':[
            {
              'a':[1, {}]
            },
            {
              'a':[{}],
              'b':[{}]
            }
          ]
        }
      ]
