# GobbledyGook

Gobbledy gook is a subset of schema that is sufficiently generalizable to the extent that we can apply the same method to it and always be doing something orderly, predictable, and useful.


## Itercursion
One of the methods used by Gobbledy Gook is something I call "intercursion". It's basically the same logic recursion and iteration use, without actually calling the function recursively, and without incrementing any index value. It recurses in place, and iterates in place, and because of that it can only be described as an iterator that removes objects using some sort of next() function. But you can virtualize the 'removal' process by holding some sort of data structure, making it act more like recursion.

Itercursion uses a sentinal value, and a container reference stack. The container reference stack preserves the last container that was used, and all the preceding containers that still have values.

We basically want to return values with n number of levels for each next() operations, depending on the needs from your schema. Also what comes after n levels is just a description of the types and not the actual values.


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
        |'div'|<---push 'div'
       | arr |<---push [obj, obj]
      -----
                                                                                                              (S)
                                                                                                               |
                                                                                                               |   
              [                                                                                                v   ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}                


      | obj |<---push {a:[obj, obj]}
     |'div'|
     | arr | 
      -----                                                                                                         
                                                                                                                
              
              
              [                                                                                                    ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             

      | arr |<---push [obj, obj]
     | obj |
     |'div'|
     | arr | 
      -----  
      
      
      
              [                                                                                                    ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
        
      the div lets us know that we are pushing one of many items at the current level
       |'div'|<---push 'div'
      | obj |<---push {'b':[{}]}
     | arr |
     | obj |
     |'div'|
     | arr | 
      -----    
      
              [                                                                                                    ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
        
      | arr |<---push [{}]
     |'div'|
     | obj |
     | arr |
     | obj |
     |'div'|
     | arr | 
      -----    
      
     
              [                                                                                                    ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
     | obj |<---push {}
     | arr |
     |'div'|
     | obj |
     | arr |
     | obj |
     |'div'|
     | arr | 
      -----    
      
     
     
 
