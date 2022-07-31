# GobbledyGook

Gobbledy gook is a subset of schema that is sufficiently generalizable to the extent that we can apply the same method to it and always be doing something orderly, predictable, and useful.


## Itercursion
One of the methods used by Gobbledy Gook is something I call "intercursion". It's basically the same logic recursion and iteration use, without actually calling the function recursively, and without incrementing any index value. It recurses in place, and iterates in place, and because of that it can only be described as an iterator that removes objects using some sort of next() function. But you can virtualize the 'removal' process by holding some sort of data structure, making it act more like recursion.

Itercursion uses a sentinal value, and a container reference stack. The container reference stack preserves the last container that was used, and all the preceding containers that still have values.

        //
        //                                                                                                      (S)
        //                                                                                                       |                                        
        //                                                                                                       |
        //                                                                                                       v
        //  [                                                                                                    ]   
        //      {                   a:                  },  {                    a:                          }    
        //          [                                  ]      [                                         ]         
        //              {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
        //                  [   ]     [   ]                            [   ]         [   ]  [   ]                  
        //                    {}        {}                              {}            {}     {}             
        //                                                                                               
                    

        sentinel returns object after 
        pushing it to the ref stack
        //   
        //| arr |
        // ^^^^^        
        
        //                                                                      (S)
        //                                                                       |                                        
        //                                                                       |                                         
        //  [                                                                    v                                ]   
        //      {                   a:                  },  {                    a:                          }    
        //          [                                  ]      [                                         ]         
        //              {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
        //                  [   ]     [   ]                            [   ]         [   ]  [   ]                  
        //                    {}        {}                              {}            {}     {}             
        //                                                                                               
        
        
        
        sentinel returns object after 
        pushing it to the ref stack
        //| obj |
        //| arr |
        // ^^^^^   


        //
        //                                                                                             (S)                 
        //                                                                                              |                 
        //  [                                                                                           |         ]   
        //      {                   a:                  },  {                    a:                     v    }    
        //          [                                  ]      [                                         ]         
        //              {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
        //                  [   ]     [   ]                            [   ]         [   ]  [   ]                  
        //                    {}        {}                              {}            {}     {}             
        //                                                                                               
        
        
        sentinel returns arr after 
        pushing it to the ref stack
        //| arr |
        //| obj |
        //| arr |
        // ^^^^^   


        //
        //                                                                                                               
        //                                                                                       (S)                        
        //  [                                                                                     |               ]   
        //      {                   a:                  },  {                    a:               |          }    
        //          [                                  ]      [                                   v     ]         
        //              {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
        //                  [   ]     [   ]                            [   ]         [   ]  [   ]                  
        //                    {}        {}                              {}            {}     {}             
        //                                                                                               
        
        sentinel returns object after 
        pushing it to the ref stack
        //| obj | 
        //| arr |
        //| obj |
        //| arr |
        // ^^^^^   

        //
        //                                                                                                               
        //                                                                                   (S)                           
        //  [                                                                                 |                   ]   
        //      {                   a:                  },  {                    a:           |              }    
        //          [                                  ]      [                               v         ]         
        //              {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
        //                  [   ]     [   ]                            [   ]         [   ]  [   ]                  
        //                    {}        {}                              {}            {}     {}             
        //                                                                                               
        sentinel creates and returns obj 
        with single key 'b' pushing obj with 
        two keys {'a' 'b'} to ref stack
        //| obj |
        //| obj | 
        //| arr |
        //| obj |
        //| arr |
        // ^^^^

        //
        //                                                                                                               
        //                                                                                                               
        //  [                                                                                                     ]   
        //      {                   a:                  },  {                    a:                          }    
        //          [                                  ]      [                                          ]         
        //              {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
        //                  [   ]     [   ]                            [   ]         [   ]  [   ]  <---(S)                
        //                    {}        {}                              {}            {}     {}             
        //                                                                                                     

        sentinel pushes then returns array
        //| arr |
        //| obj |
        //| obj | 
        //| arr |
        //| obj |
        //| arr |
        // ^^^^

        //
        //                                                                                                               
        //                                                                                                               
        //  [                                                                                                     ]   
        //      {                   a:                  },  {                    a:                          }    
        //          [                                  ]      [                                          ]         
        //              {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
        //                  [   ]     [   ]                            [   ]         [   ]  [   ]                  
        //                    {}        {}                              {}            {}     {}    <---(S)         
        //                                                                                                     

        sentinel pushes then returns obj
        //| obj |
        //| arr |
        //| obj |
        //| obj | 
        //| arr |
        //| obj |
        //| arr |
        // ^^^^

        //
        //                                                                                                               
        //                                                                                                               
        //  [                                                                                                     ]   
        //      {                   a:                  },  {                    a:                          }    
        //          [                                  ]      [                                          ]         
        //              {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
        //                  [   ]     [   ]                            [   ]         [   ]  [   ]                  
        //                    {}        {}                              {}            {}          <---(S)         
        //                                                                                                                   

        sentinel find no container or raw value 
        to drill into, returns null and pops 
        last ref off stack and deletes that 
        item from the top of the updated ref 
        stack (which is arr)
         pop ---> | obj |
        //| arr |               //| arr | <---deletes empty obj {} from arr
        //| obj |               //| obj |
        //| obj |               //| obj | 
        //| arr |               //| arr |
        //| obj |               //| obj |
        //| arr |               //| arr |
        // ^^^^                 // ^^^^
        
        
        
        //
        //                                                                                                               
        //                                                                                                               
        //  [                                                                                                     ]   
        //      {                   a:                  },  {                    a:                          }    
        //          [                                  ]      [                                          ]         
        //              {   a:  },  {   b:  }                        {   a:  },    {   a:        }             
        //                  [   ]     [   ]                            [   ]         [   ]        <---(S)                
        //                    {}        {}                              {}            {}                   
        //                                                                                                                   
                                                                                   

        sentinel find no container or raw value, 
        inside array, returns null and pops empty arr off
        stack then deletes reference to arr from the top of 
        the updated ref stack (which is arr 
        associated with b key)
          pop ---> | arr |
        //| obj |<---deletes assoiation b:[]
        //| obj | 
        //| arr |
        //| obj |
        //| arr |
        // ^^^^
        
        
        
        

