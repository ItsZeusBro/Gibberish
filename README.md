# GobbledyGook

Gobbledy gook is a subset of schema that is sufficiently generalizable to the extent that we can apply the same method to it and always be doing something orderly, predictable, and useful.


## Itercursion
One of the methods used by Gobbledy Gook is something I call "intercursion". It's basically the same logic recursion and iteration use, without actually calling the function recursively, and without incrementing any index value. It recurses and iterates in place using a queue which gives us more control and flexibility. 

Itercursion uses a sentinal value, and a reference queue 



                                                                                                                  (S)
                                                                                                                   |                                       
                                                                                                                   |
                                                                                                                   v
              [                                                                                                    ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}                

       | arr |<---push {'0':[obj,obj]}
       |     |
move sentinel to object at index 0



                                                                                        (S)
                                                                                         |                                       
                                                                                         |
                                                                                         v
              [                                                                                                    ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}                
      | obj |<---push {'a':{'a':arr}}
     | arr | 
     |     |                                                                                                         
     move sentinel to value associated with first key returned from object
                                                                                  (S)
                                                                                   |
                                                                                   |   
              [                                                                    v                              ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}                


      
      | arr |<---push {'0':[obj,obj]}
     | obj |
     | arr | 
     |     |  
     move sentinel to object at index 0      
      
                                                                                                         
                                                                                                   (S)       
              [                                                                                     |              ]   
                  {                   a:                  },  {                    a:               |          }    
                      [                                  ]      [                                   v     ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
       

                
      | obj |<---push {'b':{'a':arr, 'b':arr}}
     | arr |
     | obj |
     | arr | 
     |     |    
     move sentinel to value associated with first key returned from object  
    
        
      
      
              [                                                                                (S)                 ]   
                  {                   a:                  },  {                    a:           |              }    
                      [                                  ]      [                               v         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
        
      | arr |<---push {'0':[obj]}
     | obj |
     | arr |
     | obj |
     | arr | 
      -----    
     move sentinel to index 0 of arr because its an array
     
              [                                                                                                    ]   
                  {                   a:                  },  {                    a:            (S)            }    
                      [                                  ]      [                                 |       ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:| }             
                            [   ]       [   ]                           [     ]         [   ]  [  v]                  
                              {}          {}                             1, {}            {}     {}             
       | obj |<---push {'null':{}}
     | arr |
     | obj |
     | arr |
     | obj |
     | arr | 
      -----    
      

              [                                                                                                    ]   
                  {                   a:                  },  {                    a:             (S)          }    
                      [                                  ]      [                                  |      ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b: v}             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
     | obj |
     | arr |<---move sentinel to check if anything to iterate on (nothing to iterate on)
     | obj |
     | arr |
     | obj |
     | arr | 
      -----    
     
     
               [                                                                                   (S)              ]   
                  {                   a:                  },  {                    a:               |         }    
                      [                                  ]      [                                   v     ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
     | obj |<---(SECOND) push {'a':{'a':arr, 'b':arr}}
     | obj |
     | arr |
     | obj |<---(FIRST) move sentinel to check if anything to iterate on (a new key was found, set sentinel to new key at obj)
     | arr |
     | obj |
     | arr | 
      -----    
      move sentinel to value associated with next key returned from object  

      
                 [                                                                      (S)                        ]   
                  {                   a:                  },  {                    a:    |                     }    
                      [                                  ]      [                        v                ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
      
       | arr |<---push {'0':[obj]}
     | obj |
     | obj |
     | arr |
     | obj |
     | arr |
     | obj |
     | arr | 
      -----    
     move sentinel to index 0 of arr because its an array
      
                 [                                                                                                 ]   
                  {                   a:                  },  {                    a:      (S)                 }    
                      [                                  ]      [                           |             ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,|   b:  }             
                            [   ]       [   ]                           [     ]         [   v]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
      
       | obj |<---push {'null':{}}
     | arr |
     | obj |
     | obj |
     | arr |
     | obj |
     | arr |
     | obj |
     | arr | 
      -----    
      
      
      
 
      
