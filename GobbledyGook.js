class RefStack{
  constructor(){
    //in javascript both objects and arrays are held by reference
    this.refStack=[]
  }
  
  push(val){
    this.refStack.push(val)
  }

  pop(){
    return this.refStack.pop()
  }
}

class Sentinel{
  
  constructor(gook){
    this.refS=new RefStack()
    this.gook=gook
    this.val = gook
  }

  drill(){
    //sentinel should always keep the construct that it returns the
    //value from
    //so when its not an array or obj, it needs to end up
    //being the lowest level array or obj it obtained the value from
    
  }
  _drill(val){
    //this drills until it finds 
    if(val !== null){
      //its more efficient to null check before type checking
      if(Array.isArray(val)){
        this.refS.push(val)
        val = this.updateFromArr(val)
        return val
      }
      if(typeof val === 'object'){
        this.refS.push(val)
        val = this.updateFromObj(val)
        return val
      }
    }
  }

  unbindArr(arr){
    //unbinds the first val in the array
    //returns the val
    return val
  }

  unbindObj(obj){
    //unbinds the first associated val from Object.keys(obj)
    //returns that value that was unbound
    return val
  }
}
