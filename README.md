# GobbledyGook

Gobbledy gook is the subset of schema that is sufficiently generalizable to the extent that we can apply the same methods to it and always be doing something orderly, predictable, and useful with Gobbledy Gook utilities.

If Schema is recursive, a general recursive algorithm could just walk it, and you could call it "valid recursion". But that is not the point, finding n number of general recursive steps that display a specific multi-level recursive pattern is the point here. This is called a schema pattern. It represents the intention of recursive schema in what is otherwise treated with a general algorithm as primitive recursion. 
How do we identify all of those schema patterns and select the best amongst the set? That is the objective. The game is just here to highlight what is considered "not on of those patterns", and i think it can be used to get us closer to what matters. 

Furthermore, if you know that a general algorithm treats specific subsets of schemas as "well formed" and can handle them in a predictable way everytime, and can do powerful things with them, then you can focus on tooling that can be reused everywhere in different contexts. If that subset is sufficiently large, then virtually anything can be done with this library on well formed schema (overtime). That is the intention.

## Potential use cases
1. Fixing invalid schema
2. Validating schema
3. Invalidating schema
4. Base case analysis
5. Recursive analysis and optimization


## Schema Pattern Algorithm

#### What about schema?
1. what is a good description of any given schema?
      - That depends on whether we are key pattern agnostic

      - If we are agnostic, we are searching for a pattern on the permutation of the set \[ '[', '{' \]
      
      - If we are not key agnostic, we are searching first for key patterns, then checking to see if they follow a recurring pattern on the set \[ '[', '{' \] from top to bottom, where the base case is everything following the termination of the pattern
            - Once we have a pattern, what do we do with it as an intermediate step? 

2. based on that description is it well formed and consistent?
      - what we mean by well formed is that recursion from the top level is of a single type. What we mean by consistent is that recursion has a very consistent recursion to base case level ratio across multiple paths from the root of sufficient depth.
3. If it is well formed and consistent, what is the best way to use it?
      - If it is not consistent but is well formed what is the best way to use it?
      - If it is not well formed but is consistent, what is the best way to use it?
4. How do we test a good description? 
      - My opinion is that the way we generate tests is the way the schema is described.
      We are still answering these questions

### Postulation
1. There is some theoretical limit on the number of permutations that are possible in the set \[ '[', '{' \] that are possible before recurrence in a key agnostic setting. If we are not key agnostic, then this postulation does not matter
2. We need a recursive path validation step before we return the all of the recursive schema steps for a given path

### Axioms
1. '[' and '{' are the recognized set of generalizable recursive containers that can have any arbitrary number of keys or elements (at any level) without us needing to treat the algorithm below with any less generality than is stated.
2. For every recursive pattern there is an objective min and max number of levels to a recursive case that is agnostic to key names
3. When we are not key agnostic, we wish to find the minimum number of levels for any recursive case
4. When we are key agnostic, we wish to find the maximum number of levels for any recursive case (this guarantees recursion is valid at the least)
5. We treat each recursive path seperately from the top level, because some schema can be recursively used in multiple ways so long as they have different roots


## General Base Algorithm 
(this is not particularly useful without answering the questions above, but it is sufficiently general to build upon)
      
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
      
## Recursive Walk     

      
                                                                                          B
                                                                                          |
                                                                                          |
                                                                                          v
      [                                                                                   ]
         {                   a:             },  {                    a:                }    
            [                            ]       [                                  ]         
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }             
                   [   ]       [   ]                  [     ]       [   ]  [   ]                
                     {}          {}                    1, {}          {}     {}                



      _______________________________________________________________________________________
 
                                                                                       
                                                                                       B
                                                                                       |
                                                                                       |
      [                                                                                v  ]
         {                   a:             },  {                    a:                }    
            [                            ]       [                                  ]         
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }             
                   [   ]       [   ]                  [     ]       [   ]  [   ]                
                     {}          {}                    1, {}          {}     {}                

      ________________________________________________________________________________________
      
                                                                     B
                                                                     |
                                                                     |
      [                                                              v                    ]
         {                   a:             },  {                    a:                }    
            [                            ]       [                                  ]       
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }            
                   [   ]       [   ]                  [     ]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}        




      ________________________________________________________________________________________

                                                                  
                                                                      
                                                                                B
      [                                                                         |         ]
         {                   a:             },  {                    a:         |      }    
            [                            ]       [                              v   ]       
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }            
                   [   ]       [   ]                  [     ]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}        




      ________________________________________________________________________________________

                                                                  
                                                                      
                                                                            B
      [                                                                     |             ]
         {                   a:             },  {                    a:     |          }    
            [                            ]       [                          v       ]       
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }            
                   [   ]       [   ]                  [     ]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}        


      _________________________________________________________________________________________

                                                                             
      [                                                                                   ]
         {                   a:             },  {                    a:       B        }    
            [                            ]       [                            |     ]       
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:| }            
                   [   ]       [   ]                  [     ]       [   ]  [  v]              
                     {}          {}                    1, {}          {}     {}        



      _______________________________


                                                                            B
      [                                                                     |             ]
         {                   a:             },  {                    a:     |          }    
            [                            ]       [                          v       ]       
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }            
                   [   ]       [   ]                  [     ]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}      

      _______________________________

                                                                                B
      [                                                                         |         ]
         {                   a:             },  {                    a:         |      }    
            [                            ]       [                              v   ]       
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }            
                   [   ]       [   ]                  [     ]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}        



      _____________________________________________________________________________________________________

                                                                     B
      [                                                              |                   ]
         {                   a:             },  {               a:   |                }    
            [                            ]       [                   v             ]       
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }            
                   [   ]       [   ]                  [     ]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}      

      ________________________________________________________________________________________________________


                                                                      
      [                                                                                  ]
         {                   a:             },  {               a:   B                }    
            [                            ]       [                   |             ]       
                 {   a:  },  {   b:  }               {   a:  },  {   |a:,    b:  }            
                   [   ]       [   ]                  [     ]       [v  ]  [   ]              
                     {}          {}                    1, {}          {}     {}      


      ________________________________

                                                                     B
      [                                                              |                   ]
         {                   a:             },  {               a:   |                }    
            [                            ]       [                   v             ]       
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }            
                   [   ]       [   ]                  [     ]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}      


      _________________________________

                                                                                B
      [                                                                         |         ]
         {                   a:             },  {                    a:         |      }    
            [                            ]       [                              v   ]       
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }            
                   [   ]       [   ]                  [     ]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}        



      _________________________________

                                                                     B
                                                                     |
                                                                     |
      [                                                              v                    ]
         {                   a:             },  {                    a:                }    
            [                            ]       [                                  ]       
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }            
                   [   ]       [   ]                  [     ]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}        


      ________________________________________________________________________________________________________

                                                                      
                                                                      
                                                     B                 
      [                                              |                                    ]
         {                   a:             },  {    |               a:                }    
            [                            ]       [   v                              ]       
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }            
                   [   ]       [   ]                  [     ]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}        

      ______________________________________________________________________________________________________

                                                                      
                                                                      
                                                         B                 
      [                                                  |                                 ]
         {                   a:             },  {        |           a:                }    
            [                            ]       [       v                          ]       
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }            
                   [   ]       [   ]                  [     ]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}        



      _______________________________________________________________________________________________________

                                                                           
      [                                                                                    ]
         {                   a:             },  {          B         a:                }    
            [                            ]       [         |                        ]       
                 {   a:  },  {   b:  }               {   a:| },  {   a:,    b:  }            
                   [   ]       [   ]                  [    v]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}        


      _________________________________

                                                                      
                                                         B                 
      [                                                  |                                 ]
         {                   a:             },  {        |           a:                }    
            [                            ]       [       v                          ]       
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }            
                   [   ]       [   ]                  [     ]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}        



      _______________________________________________________________________________________________________
                                                                      
                                                                           
      [                                                                                    ]
         {                   a:             },  {      B             a:                }    
            [                            ]       [     |                            ]       
                 {   a:  },  {   b:  }               { | a:  },  {   a:,    b:  }            
                   [   ]       [   ]                  [v    ]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}        




      ________________________________

                                                         B                 
      [                                                  |                                 ]
         {                   a:             },  {        |           a:                }    
            [                            ]       [       v                          ]       
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }            
                   [   ]       [   ]                  [     ]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}        




      _________________________________


                                                                     B
                                                                     |
                                                                     |
      [                                                              v                    ]
         {                   a:             },  {                    a:                }    
            [                            ]       [                                  ]       
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }            
                   [   ]       [   ]                  [     ]       [   ]  [   ]              
                     {}          {}                    1, {}          {}     {}        

      _________________________________
                                                                                       
                                                                                       B
                                                                                       |
                                                                                       |
      [                                                                                v  ]
         {                   a:             },  {                    a:                }    
            [                            ]       [                                  ]         
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }             
                   [   ]       [   ]                  [     ]       [   ]  [   ]                
                     {}          {}                    1, {}          {}     {}                
   



      _________________________________

                                                                                          B
                                                                                          |
                                                                                          |
                                                                                          v
      [                                                                                   ]
         {                   a:             },  {                    a:                }    
            [                            ]       [                                  ]         
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }             
                   [   ]       [   ]                  [     ]       [   ]  [   ]                
                     {}          {}                    1, {}          {}     {}                


      _______________________________________________________________________________________________________

                                            B
                                            |
                                            |
                                            v
      [                                                                                   ]
         {                   a:             },  {                    a:                }    
            [                            ]       [                                  ]         
                 {   a:  },  {   b:  }               {   a:  },  {   a:,    b:  }             
                   [   ]       [   ]                  [     ]       [   ]  [   ]                
                     {}          {}                    1, {}          {}     {}                




      etc....



## To understand Schema in a more general way I devised this game called Brass Tacks:
In Javascript schema we have two ascii charachters that represent our ability to recurse. '[' and '{'. The game we are trying to play is to create as long of a non-recursive string of these two charachters where you are not allowed to use the same charachter in a row n number of times.

For example, say n=3 (meaning, we are not allowed to use the same charachter more than 3 times in a row), how long of a string can you make without creating a recursive pattern starting from the left most charachter?

We can generalize the generation of the string but this might not embrace the whole set of possibilities. The goal is to find recurrent patterns in generating non recurrent strings:

1. Everything starts with {(n), [(n), {(n-n+1), or [(n-n+1)
2. If the set of non recuring schema strings is not infinite, we can use a greedy algorithm to have a standard way of speaking about the set iteratively and generationally. The greedy algorithm uses the a substitution approach in a predefined way to reuse patterns (used by the string already) that do not violate the non-recurrence principle.


### Greedy Brass Tacks Algorithm (where we are always trying to find a bigger base case)
     In this game n=2 (meaning we cannot have more than two successive tokens)

      [     
      (index 0 is arbitrarily chosen, the rest are not)

      [  [    
      (the greedy algorithm looks at the longest substring before position at index 1 [reverse order], 
      it finds the longest substring that does not violate n which equals 2)

      [  [  {   
      (the greedy algorithm does not find a substring it can use without violating n, so it grabs 
      the opposite token than the previous)


         v  v   
      [  [  {  [  {  
      (the greedy token finds a substring of length 2 that does not violate the limit of n and does 
      not display recursive behavior from the root)



What can we do with a base string set?

Say you have the following example:
[  [  {  [  {

This is not a recursive string, but if i removed the first element at position 0, it would make it a recursive string.
Howver what would happen if I flipped the value at the new first position from:
[  {  [  {
to:
{ { [ {
all of the sudden i can use the rest of the substring! But is this generalizable? I'm not sure yet, i want to run some tests.
