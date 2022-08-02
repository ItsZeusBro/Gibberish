import * as util from "node:util"

export class Gobbledy{
  
  constructor(gook){
    this.rawQ=[]
    this.gobbledy(gook)
  }


  //Gobbledy is supposed to validate and describe recursion
  //and make some sort of determination on the proper way to recurse the schema
  //based on some deterministic rules

  //what is a good description of any given schema?
  //based on that description is it well formed and consistent?
  //based on its consistency, what is the best way to use it?
  gobbledy(gook){
      if(gook){
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