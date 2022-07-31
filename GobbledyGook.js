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
  }

  drill(){
    //operates like a next() function on this.gook
    //when it comes upon anything, it pushes and unbinds
    //the value from the underlying structure, then returns it
    if(val !== null){
      //its more efficient to null check before type checking
      if(Array.isArray(val)|| typeof val === 'object'){
        this.refS.push(val)
        this.unbind(context, val)
        return val
      }
    }
  }
}
