# GobbledyGook

Gobbledy gook is a subset of schema that is sufficiently generalizable to the extent that we can apply the same method to it and always be doing something orderly, predictable, and useful.


## Itercursion
One of the methods used by Gobbledy Gook is something I call "intercursion". It's basically the same logic recursion and iteration use, without actually calling the function recursively, and without incrementing any index value. It recurses and iterates in place using a stack which gives us more control and flexibility. 

Itercursion uses a sentinal value, and a reference stack. 

We basically want to return values with n number of levels for each next() operation, depending on the needs from your schema. Also what comes after n levels is just a description of the types and not the actual values.


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


      | obj |<---push {a:[{a:arr}, {a:arr, b:arr}]}
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
      
     
     
 
