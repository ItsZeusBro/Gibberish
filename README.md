# GobbledyGook

Gobbledy gook is a subset of schema that is sufficiently generalizable to the extent that we can apply the same method to it and always be doing something orderly, predictable, and useful.


## Itercursion
One of the methods used by Gobbledy Gook is something I call "intercursion". It's basically the same logic recursion and iteration use, without actually calling the function recursively, and without incrementing any index value. It recurses in place, and iterates in place, and because of that it can only be described as an iterator that removes objects using some sort of next() function. But you can virtualize the 'removal' process by holding some sort of data structure, making it act more like recursion.

Itercursion uses a sentinal value, and a container reference stack. The container reference stack preserves the last container that was used, and all the preceding containers that still have values.


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

       | arr |<---push
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


      | obj |<---push
     | arr | 
      -----                                                                                                         
                                                                                                                
              
              
              [                                                                                                    ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             

      | arr |<---push
     | obj |
     | arr | 
      -----  
      
      
      
              [                                                                                                    ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
        | obj |<---push
      | obj |<---push
     | arr |
     | obj |
     | arr | 
      -----    
      
      
     
              [                                                                                                    ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
      | arr |<---push
     | obj |
     | obj |
     | arr |
     | obj |
     | arr | 
      -----    
      
     
     
     
              [                                                                                                    ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
      | obj |<---push
     | arr |
     | obj |
     | obj |
     | arr |
     | obj |
     | arr | 
      -----  
      
      
      
     
              [                                                                                                    ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
    
    pop {}
    
    pop--->| obj |
     | arr |
     | obj |
     | obj |
     | arr |
     | obj |
     | arr | 
      -----    
      
     push {}
     
       | obj |<---push
      -----    
      
      
              [                                                                                                    ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
    
     pop [{}]
    
    pop--->| arr |
     | obj |
     | obj |
     | arr |
     | obj |
     | arr | 
      -----    
      
     push [{}]
     
     | arr |<---push
     | obj |
      -----    
      
      
              [                                                                                                    ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
    
     pops {b:[{}]}
    

    pop--->| obj |
     | obj |
     | arr |
     | obj |
     | arr | 
      -----    
      
     pushes {b:[{}]}
     | obj |<---push
     | arr |
     | obj |
      ----- 
      
