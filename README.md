# GobbledyGook

Gobbledy gook is the subset of schema that is sufficiently generalizable to the extent that we can apply the same methods to it and always be doing something orderly, predictable, and useful with Gobbledy Gook utilities.

## Schema Pattern Algorithm

#### What about schema?
1. what is a good description of any given schema?
2. based on that description is it well formed and consistent?
3. based on its consistency, what is the best way to use it?
4. How do we test a good description? My opinion is that the way we generate tests is the way the schema is described.
We are still answering these questions, GO AWAY!

### Postulation
1. There is some theoretical limit on the number of permutations that are possible in the set ('[', '{') that are possible before recurrence in a key agnostic setting

### Axioms
1. '[' and '{' are the recognized set of generalizable recursive containers that can have any arbitrary number of keys or elements (at any level) without us needing to treat the algorithm below with any less generality than is stated.
2. For every recursive pattern there is an objective min and max number of levels to a recursive case that is agnostic to key names
3. When we are not key agnostic, we wish to find the minimum number of levels for any recursive case
4. When we are key agnostic, we wish to find the maximum number of levels for any recursive case (this guarantees recursion is valid at the least)

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
