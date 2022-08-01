# GobbledyGook

Gobbledy gook is a subset of schema that is sufficiently generalizable to the extent that we can apply the same recursive method to it and always be doing something orderly, predictable, and useful.




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

      | arr |<---push [obj,[obj]
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
       | obj |<---push {'a':arr}
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


      
       | arr |<---push [obj,obj]
     | obj |
     | arr | 
     |     |  
     move sentinel to object at index 0      
      
                                                                             (S)       
              [                                                                                (S)                  ]   
                  {                   a:                  },  {                    a:           |              }    
                      [                                  ]      [                               v         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
       

                
       | obj |<---push {'b':[{}]}
     | arr |
     | obj |
     | arr | 
     |     |    
     move sentinel to value associated with first key returned from object  
    
    
              [                                                                                                   ]   
                  {                   a:                  },  {                    a:             (S)          }    
                      [                                  ]      [                                  |       ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b: v }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
        
       | arr |<---push [{}]
     | obj |
     | arr |
     | obj |
     | arr | 
     |     |   
     move sentinel to value at index 0
     
              [                                                                                                    ]   
                  {                   a:                  },  {                    a:            (S)            }    
                      [                                  ]      [                                 |       ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:|  }             
                            [   ]       [   ]                           [     ]         [   ]  [  v]                  
                              {}          {}                             1, {}            {}     {}             
       | obj |<---push {}
     | arr |
     | obj |
     | arr |
     | obj |
     | arr | 
     |     |    
      no where to move sentinel, return

              [                                                                                                    ]   
                  {                   a:                  },  {                    a:             (S)          }    
                      [                                  ]      [                                  |      ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b: v  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             

      no where to move sentinel, return
     
     
               [                                                                                    (S)              ]   
                  {                   a:                  },  {                    a:                |         }    
                      [                                  ]      [                                    v     ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:   }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
     
      move sentinel to value associated with next key returned from object  

      
               [                                                                        (S)                        ]   
                  {                   a:                  },  {                    a:    |                     }    
                      [                                  ]      [                        v                ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [   ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
      
       | obj |<---push {'a':[{}]}
     | obj |
     | arr |
     | obj |
     | arr |
     | obj |
     | arr | 
     |     |    
     move sentinel to value associated with key
      
               [                                                                                                  ]   
                  {                   a:                  },  {                    a:       (S)                }    
                      [                                  ]      [                            |            ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:, v   b:  }             
                            [   ]       [   ]                           [     ]         [    ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
      
       | arr |<---push [{}]
     | obj |
     | obj |
     | arr |
     | obj |
     | arr |
     | obj |
     | arr | 
     |     |    
      move sentinel to first object in array

      
             [                                                                                                    ]   
                  {                   a:                  },  {                    a:      (S)                 }    
                      [                                  ]      [                           |             ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,|   b:  }             
                            [   ]       [   ]                           [     ]         [   v]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
      
       | obj |<---push {}
     | arr |
     | obj |
     | obj |
     | arr |
     | obj |
     | arr |
     | obj |
     | arr | 
     |     |    
     nothing to move sentinel to, return
      
    
            
              [                                                                                                   ]   
                  {                   a:                  },  {                    a:       (S)                }    
                      [                                  ]      [                            |            ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:, v  b:  }             
                            [   ]       [   ]                           [     ]         [    ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
      
     | obj |
     | arr |
     | obj |
     | obj |
     | arr |
     | obj |
     | arr |
     | obj |
     | arr |  nothing to move sentinel to, return
     |     |    
        
 
               [                                                                                   (S)              ]   
                  {                   a:                  },  {                    a:               |          }    
                      [                                  ]      [                                   v     ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [    ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
      
     | obj |
     | arr |
     | obj |
     | obj |
     | arr |
     | obj |
     | arr |
     | obj |
     | arr |  nothing to move sentinel to, return
     |     |    
        
                                                                                                         (S)
                [                                                                                         |        ]   
                  {                   a:                  },  {                    a:                     v    }    
                      [                                  ]      [                                         ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [    ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
      
     | obj |
     | arr |
     | obj |
     | obj |
     | arr |
     | obj |
     | arr |
     | obj |
     | arr |  recursive function moves sentinel to next item in array
     |     |    
     
     
                                                                                      
                [                                                             (S)                                  ]   
                  {                   a:                  },  {                |   a:                          }    
                      [                                  ]      [              v                          ]         
                          {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [    ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
      
      
       | obj |<---push {'a':[1, {}]}
     | obj |
     | arr |
     | obj |
     | obj |
     | arr |
     | obj |
     | arr |
     | obj |
     | arr |  
     |     |    
      
 
                                                                                       
                [                                                                                                 ]   
                  {                   a:                  },  {              (S)     a:                        }    
                      [                                  ]      [             |                           ]         
                          {   a:  },  {   b:  }                        {   a: v},    {   a:,    b:  }             
                            [   ]       [   ]                           [     ]         [    ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
      
       | arr |<---push [1, {}]
     | obj |
     | obj |
     | arr |
     | obj |
     | obj |
     | arr |
     | obj |
     | arr |
     | obj |
     | arr |  
     |     |    
     
     
                [                                                                                                 ]   
                  {                   a:                  },  {             (S)     a:                        }    
                      [                                  ]      [            |                           ]         
                          {   a:  },  {   b:  }                        {   a:| },    {   a:,    b:  }             
                            [   ]       [   ]                           [    v]         [    ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
       | obj |<---push {} 
     | arr |
     | obj |
     | obj |
     | arr |
     | obj |
     | obj |
     | arr |
     | obj |
     | arr |
     | obj |
     | arr |  
     |     |    
     

     
                [                                                                                                 ]   
                  {                   a:                  },  {         (S)          a:                        }    
                      [                                  ]      [        |                               ]         
                          {   a:  },  {   b:  }                        { | a:  },    {   a:,    b:  }             
                            [   ]       [   ]                           [v    ]         [    ]  [   ]                  
                              {}          {}                             1, {}            {}     {}             
       | int |<---push 1 
     | obj |
     | arr |
     | obj |
     | obj |
     | arr |
     | obj |
     | obj |
     | arr |
     | obj |
     | arr |
     | obj |
     | arr |  
     |     |    
      
     etc...
      
