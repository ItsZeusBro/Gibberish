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



            sentinel returns object after 
            pushing it to the ref stack

    push--->| arr |
             ^^^^^        

                                                                                  (S)
                                                                                   |                                        
                                                                                   |                                         
              [                                                                    v                                ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}         




            sentinel returns object after 
            pushing it to the ref stack
    push--->| obj |
            | arr |
             ^^^^^   



                                                                                                         (S)                 
                                                                                                          |                 
              [                                                                                           |         ]   
                  {                   a:                  },  {                    a:                     v    }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             



            sentinel returns arr after 
            pushing it to the ref stack
    push--->| arr |
            | obj |
            | arr |
             ^^^^^   




                                                                                                   (S)                        
              [                                                                                     |               ]   
                  {                   a:                  },  {                    a:               |          }    
                      [                                  ]      [                                   v     ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}         


            sentinel returns object after 
            pushing it to the ref stack
    push--->| obj | 
            | arr |
            | obj |
            | arr |
             ^^^^^   



                                                                                               (S)                           
              [                                                                                 |                   ]   
                  {                   a:                  },  {                    a:           |              }    
                      [                                  ]      [                               v         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}         
            sentinel creates and returns obj 
            with single key 'b' pushes nothing
            
            | obj | 
            | arr |
            | obj |
            | arr |
             ^^^^




              [                                                                                                     ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                          ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]<---(S)                  
                              {}          {}                             1, {}            {}     {}         


            sentinel pushes then returns array
    push--->| arr |
            | obj |
            | arr |
            | obj |
            | arr |
             ^^^^




              [                                                                                                     ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                          ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {} <---(S)            


            sentinel pushes then returns empty obj
    push--->| obj |
            | arr |
            | obj |
            | arr |
            | obj |
            | arr |
             ^^^^




              [                                                                                                     ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                          ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]        [   ]  [   ]                  
                              {}          {}                             1, {}           {}          <---(S)         


            sentinel find no container or raw value 
            to drill into, returns null and pops 
            last ref off stack and deletes that 
            item from the top of the updated ref 
            stack (which is arr)
             pop ---> | obj |
            | arr |               | arr | <---deletes empty obj {} from arr
            | obj |               | obj |
            | arr |               | arr |
            | obj |               | obj |
            | arr |               | arr |
             ^^^^                  ^^^^






              [                                                                                                     ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                          ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:        }             
                            [   ]       [   ]                           [     ]        [   ]         <---(S)           
                              {}          {}                             1, {}           {}            



            sentinel find no container or raw value, 
            inside arr, returns null and pops empty arr off
            stack then deletes reference to arr from the top of 
            the updated ref stack (which is obj 
            associated with b key)
              pop ---> | arr |
            | obj |               | obj |<---deletes assoiation b:[]
            | arr |               | arr |
            | obj |               | obj |
            | arr |               | arr |
             ^^^^                   ^^^^


              [                                                                                                     ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                          ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:        } <---(S)             
                            [   ]       [   ]                           [     ]        [   ]                   
                              {}          {}                             1, {}           {}            



            sentinel looks at the top of the stack because
            it returned null last time. It finds an 
            object with a key. Because its already 
            on the stack it does nothing but drill into it
            
            
            | obj | 
            | arr |
            | obj |
            | arr |
             ^^^^
             
             
              [                                                                                                     ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                          ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:        }              
                            [   ]       [   ]                           [     ]        [   ]  <---(S)                 
                              {}          {}                             1, {}           {}            



            Sentinel holds an object with a key.
            It obtains the associated array pushes
            it to the stack and returns it
            
    push--->| arr |     
            | obj | 
            | arr |
            | obj |
            | arr |
             ^^^^            
             
              [                                                                                                     ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                          ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:        }              
                            [   ]       [   ]                           [     ]        [   ]                   
                              {}          {}                             1, {}           {}   <---(S)             



            Sentinel holds an array with an object.
            It obtains the object pushes
            it to the stack and returns it
            
    push--->| obj |          
            | arr |     
            | obj | 
            | arr |
            | obj |
            | arr |
             ^^^^            
             
              [                                                                                                     ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                          ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:        }              
                            [   ]       [   ]                           [     ]        [   ]               
                              {}          {}                             1, {}      del--->{} <---(S)



            Sentinel holds an empty object from last time.
            It returns null after popping the
            stack and deleting it from the 
            next item atop the stack (arr)
            
          pop--->| obj |          
            | arr |              | arr |<---deletes object {} from array        
            | obj |              | obj | 
            | arr |              | arr |
            | obj |              | obj |
            | arr |              | arr |
             ^^^^                 ^^^^        
             
             
             
             
              [                                                                                                     ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                          ]         
                          {   a:  },  {   b:  }                        {   a:  },    {             }              
                              [   ]     [   ]                           [     ]         del--->[     ] <---(S)                       
                                {}        {}                             1, {}                                 



            Sentinel holds null, goes to top of stack.
            It doesnt return anything. It finds an
            empty array, pops stack. Deletes it from the 
            next item atop the stack (obj)
            
                    
          pop--->| arr |                        
            | obj |              | obj |<---deletes array and associated key 'a' from object
            | arr |              | arr |
            | obj |              | obj |
            | arr |              | arr |
             ^^^^                 ^^^^       
             
             
             
             
              [                                                                                                     ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                          ]         
                          {   a:  },  {   b:  }                        {   a:  },     del--->{              }<---(S)              
                              [   ]     [   ]                           [     ]                                    
                                {}        {}                             1, {}                                 



            Sentinel holds null after deleting arr.
            It goes to top of stack
            and finds an empty object.
            Nothing to drill into, so
            it removes it from the stack
            and deletes its value from 
            next item atop the stack

                                           
          pop--->| obj |              
            | arr |              | arr |<---deletes empty object from array
            | obj |              | obj |
            | arr |              | arr |
             ^^^^                 ^^^^        





              [                                                                                                     ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                          ] <---(S)     
                          {   a:  },  {   b:  }                        {   a:  },                               
                              [   ]     [   ]                           [     ]                                    
                                {}        {}                             1, {}                                 



            Sentinel holds null.
            It goes to top of stack
            and finds an array with an object.
            Drills into array. Does nothing to
            Stack.

                                           
                 
            | arr |              
            | obj |              
            | arr |             
             ^^^^                       




              [                                                                                                     ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                          ]      
                          {   a:  },  {   b:  }                        {   a:  } <---(S)                               
                              [   ]     [   ]                           [     ]                                    
                                {}        {}                             1, {}                                 



            Sentinel holds an array with an object.
            It drills into it. It pushes to obj to stack,
            and creates an object copy to return.
            

                                           
    push--->| obj |    
            | arr |              
            | obj |              
            | arr |             
             ^^^^                       


              [                                                                                                     ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                          ]      
                          {   a:  },  {   b:  }                        {   a:  }                               
                              [   ]     [   ]                           [     ]  <---(S)                                   
                                {}        {}                             1, {}                                 



            Sentinel holds an object with a key.
            It drills into it. It pushes arr to stack,
            and creates an array copy to return.
            

    push--->| arr |                                 
            | obj |    
            | arr |              
            | obj |              
            | arr |             
             ^^^^      
             
             
             
             

              [                                                                                                     ]   
                  {                   a:                  },  {                    a:                          }    
                      [                                  ]      [                                          ]      
                          {   a:  },  {   b:  }                        {   a:  }                               
                              [   ]     [   ]                           [     ]                                     
                                {}        {}                             1, {}  <---(S)                               



            Sentinel holds an array with two items.
            It drills into index 0. It pushes object
            to stack because its a container,
            and creates an object copy to return.
            
    push--->| obj |
            | arr |                                 
            | obj |    
            | arr |              
            | obj |              
            | arr |             
             ^^^^      
