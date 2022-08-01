## Schema Pattern Algorithm

#### What about schema?
1. It must have some sort of pattern that is recuring 
2. A schema is different than an object, in that objects use a particular schema, whereas schema itself is more general. 
3. Schema is the language of data structures, so specific data structures that are common have well recognized patterns
4. All schema have terminal values that can be looked at as base cases
5. Schema typically has a recursive pattern, and an arbitrary payload at each 'level' which is defined as n number of primitive schema levels
6. The top level of all schema must be an array or a key/value store, or some other data structure, otherwise its just a terminal and not schema at all but it still must be dealt with as if it were
7. Intermediate levels are the same

#### What it all means?
1. Schema is so general, that validating it can only be done with a specific pattern in mind, otherwise its just GobbledyGook
2. Validating should be done with very general utilities with specific utilities in between them. What this means is that a validation interface should look like this.
3. So general patterns at each recursive step are required, and right after them some specific you want to check for.
4. We don't want to force any general or specific validations on any given schema without it being specified.

#### What are the general utilities?
1. Every n recursive steps (aka "schema step") is an array or object starting with level m, and if it does not follow this pattern it is because its a base case (aka "schema terminal"), otherwise the schema is invalid. In otherwords everything in schema from a vertical perspective must fit in one of two categories, a "schema step" or a "schema terminal" (isSchemaStep() and isSchemaTerminal() are evaluated from the level right after the previous schema step)
2. Every schema step has i number of primitive recursive levels, so a lookahead function is needed in recursive validation algorithm to verify what is ahead of it. So at every recursive step we can use another recursive lookahead function on n number of levels that validates and comes right back for processing.

### Pattern Schema Algorithm is built on the Base Recursive Algorithm






                                                                                                           B
                                                                                                           |                                       
                                                                                                           |
                                                                                                           v
      [                                                                                                    ]   
          {                   a:                  },  {                    a:                          }    
              [                                  ]      [                                         ]         
                  {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}                

            Base Queue
      |      [obj,[obj]      |<---push 
      |                      |

            Pattern Queue
      |                      |
                                                                                                           B
                                                                                                       P   |                                       
                                                                                                       |   |
                                                                                                       |   v
      [                                                                                                v   ]   
          {                   a:                  },  {                    a:                          }    
              [                                  ]      [                                         ]         
                  {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}                

      
            Base Queue
      |      [obj,[obj]      | 
      |                      |
      
            Pattern Queue
      |       {'a':arr}      |<---push 
      |                      |

                                                                                                           B 
                                                                           P                               |                                       
                                                                           |                               |
                                                                           |                               v
      [                                                                    v                               ]   
          {                   a:                  },  {                    a:                          }    
              [                                  ]      [                                         ]         
                  {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}                

             Base Queue
      |      [obj,[obj]      | 
      |                      |


            Pattern Queue
      |  [{'a'}, {'a','b'}]  |<---push 
      |       {'a':arr}      | 
      |                      |
                                                                                                           
                                                                                                           B                                      
                                                                                                           |
                                                                                                           v
      [                                                                                                    ]   
          {                   a:                  },  {                    a:                          }    
              [                                  ]      [                                         ]         
                  {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:  }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}                
        
             Base Queue
      |     [obj,[obj]       | 
      |                      |
      
            Pattern Queue
      |  [{'a'}, {'a','b'}]  | 
      |       {'a':arr}      | 
      |                      |
                                    
      
      At this step, the Base Recursive algorithm obtains the lookahead queue, validates the current step, and then saves the pattern queue
      into a schema queue. Then it clears the pattern queue. Then recursion steps ahead to the end of the pattern queue and begins recursing
      from there.
      
      
      

                                                                                            
      [                                                                                      B             ]
          {                   a:                  },  {                    a:                |         }
              [                                  ]      [                                    v     ]
                  {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:   }
                    [   ]       [   ]                           [     ]         [   ]  [   ]
                      {}          {}                             1, {}            {}     {}


            Base Queue
      |      {'a','b'}       |
      |     [obj,[obj]       | 
      |                      |   

            Pattern Queue
      |                      |
                                 

      [                                                                                  P   B            ]
          {                   a:                  },  {                    a:            |   |        }
              [                                  ]      [                                v   v    ]
                  {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:   }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}             

            Base Queue
      |                      |
      |      {'a','b'}       |
      |     [obj,[obj]       | 
      |                      |   

            Pattern Queue
      |        [{}]          |<---push
      |                      |
      

      [                                                                                      B            ]
          {                   a:                  },  {                    a:                |        }
              [                                  ]      [                                 P  v    ]
                  {   a:  },  {   b:  }                        {   a:  },    {   a:,    b:|  }             
                    [   ]       [   ]                           [     ]         [   ]  [  v]                  
                      {}          {}                             1, {}            {}     {}             

       
            Base Queue
      |                      |
      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |         {}           |
      |        [{}]          |
      |                      |  
       
       
       
       [                                                                                      B            ]
          {                   a:                 },  {                    a:                  |        }
              [                              ]          [                                     v    ]
                  {   a:  },  {   b:  }                       {    a:   },    {   a:,    b:   }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}             

       
            Base Queue
      |                      |
      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |         {}           |
      |        [{}]          |
      |                      |  
       

      At this step, the Base Recursive algorithm obtains the lookahead queue, validates the current step, and then saves the pattern queue
      into a schema queue. Then it clears the pattern queue. Then recursion steps ahead to the end of the pattern queue and begins recursing
      from there.



    [                                                                                    B                 ]
          {                   a:                 },  {                    a:             |             }
              [                              ]          [                                v         ]
                  {   a:  },  {   b:  }                       {    a:   },    {   a:,    b:   }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}             

       
            Base Queue
      |                      |
      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue

      |                      |  
       

      Nothing gets pushed to the queue, because we are returning from the base case.
      
      
      [                                                                                       B              ]
          {                   a:                 },  {                    a:                  |        }
              [                              ]          [                                     v    ]
                  {   a:  },  {   b:  }                       {    a:   },    {   a:,    b:   }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}             

       
            Base Queue
      |                      |
      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue

      |                      |  
       

      Nothing gets pushed to the queue, because we are returning from the base case.
      
      
     
      [                                                                           P           B              ]
          {                   a:                 },  {                    a:      |           |        }
              [                              ]          [                         v           v   ]
                  {   a:  },  {   b:  }                       {    a:   },    {   a:,    b:   }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}             

       
            Base Queue

      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue

      |         [{}]         |
             
      
      [                                                                                       B              ]
          {                   a:                 },  {                    a:     P            |        }
              [                              ]          [                        |            v   ]
                  {   a:  },  {   b:  }                       {    a:   },    {  |a:,    b:   }             
                    [   ]       [   ]                           [     ]         [v  ]  [   ]                  
                      {}          {}                             1, {}            {}     {}             

       
            Base Queue

      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |          {}          |
      |         [{}]         |
    
      
      [                                                                           B                         ]
          {                   a:                 },  {                    a:      |                   }
              [                              ]          [                         v               ]
                  {   a:  },  {   b:  }                       {    a:   },    {   a:,    b:   }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}             

       
            Base Queue

      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |                      |
      
      Base case is just returning from the step after the base case was found by the Pattern pointer
      
      
      [                                                                                       B            ]
          {                   a:                 },  {                    a:                  |       }
              [                              ]          [                                     v   ]
                  {   a:  },  {   b:  }                       {    a:   },    {   a:,    b:   }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}             

       
            Base Queue

      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |                      |
      
      
      
      Base case is just returning from the step after the base case was found by the Pattern pointer
      
                                                                                                  B
      [                                                                                           |        ]
          {                   a:                 },  {                    a:                      v   }
              [                              ]          [                                         ]
                  {   a:  },  {   b:  }                       {    a:   },    {   a:,    b:   }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}             

       
            Base Queue

      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |                      |
      
      Base case is just returning from the step after there was nothing to iterate on in the lower step


                                                                                                   
      [                                                       B                                            ]
          {                   a:                 },  {        |           a:                          }
              [                              ]          [     v                                   ]
                  {   a:  },  {   b:  }                       {    a:   },    {   a:,    b:   }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}             

       
            Base Queue

      |         {'a'}        |<---push
      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |                      |
      
                
                
                
      [                                                       B    P                                       ]
          {                   a:                 },  {        |    |      a:                          }
              [                              ]          [     v    v                              ]
                  {   a:  },  {   b:  }                       {    a:   },    {   a:,    b:   }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}             

       
            Base Queue

      |         {'a'}        |
      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |        [1, {}]       |
      |                      |
      
      
                
      [                                                       B                                            ]
          {                   a:                 },  {        |           a:                          }
              [                              ]          [     v      P                            ]
                  {   a:  },  {   b:  }                       {    a:|  },    {   a:,    b:   }             
                    [   ]       [   ]                           [    v]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}             

       
            Base Queue

      |         {'a'}        |
      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |          {}          | 
      |        [1, {}]       |
      |                      |
      
      
      [                                                            B                                       ]
          {                   a:                 },  {             |       a:                          }
              [                              ]          [          v                              ]
                  {   a:  },  {   b:  }                       {    a:   },    {   a:,    b:   }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}             

       
            Base Queue

      |         {'a'}        |
      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |          {}          | 
      |        [1, {}]       |
      |                      |
      
      
      [                                                                                                    ]
          {                   a:                 },  {                     a:                          }
              [                              ]          [        B                                ]
                  {   a:  },  {   b:  }                       {  | a:   },    {   a:,    b:   }             
                    [   ]       [   ]                           [v    ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}             

       
            Base Queue

      |           1          |<---push
      |         {'a'}        |
      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |                      |
      
      
      
      [                                                            B                                       ]
          {                   a:                 },  {             |       a:                          }
              [                              ]          [          v                              ]
                  {   a:  },  {   b:  }                       {    a:   },    {   a:,    b:   }             
                    [   ]       [   ]                           [     ]         [   ]  [   ]                  
                      {}          {}                             1, {}            {}     {}             

       
            Base Queue

      |           1          |
      |         {'a'}        |
      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |                      |
      
                                                                                                      B
      [                                                                                               |        ]
            {                   a:                 },   {                     a:                      v   }
                  [                              ]          [                                         ]
                      {   a:  },  {   b:  }                       {    a:   },    {   a:,    b:   }             
                        [   ]       [   ]                           [     ]         [   ]  [   ]                  
                          {}          {}                             1, {}            {}     {}             


            Base Queue

      |           1          |
      |         {'a'}        |
      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |                      |
      
                                                                                                          B
                                                                                                          |
      [                                                                                                   v    ]
            {                   a:                 },   {                     a:                          }
                  [                              ]          [                                         ]
                      {   a:  },  {   b:  }                       {    a:   },    {   a:,    b:   }             
                        [   ]       [   ]                           [     ]         [   ]  [   ]                  
                          {}          {}                             1, {}            {}     {}             


            Base Queue

      |           1          |
      |         {'a'}        |
      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |                      |
      
                                                                                                              B 
                                                                                                              |
                                                                                                              v
      [                                                                                                       ]
            {                   a:                 },   {                     a:                          }
                  [                              ]          [                                         ]
                      {   a:  },  {   b:  }                       {    a:   },    {   a:,    b:   }             
                        [   ]       [   ]                           [     ]         [   ]  [   ]                  
                          {}          {}                             1, {}            {}     {}             


            Base Queue

      |           1          |
      |         {'a'}        |
      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |                      |
      
      
                                                   B 
                                                   |
                                                   |
      [                                            v                                                           ]
            {                   a:                 },   {                     a:                          }
                  [                              ]          [                                         ]
                      {   a:  },  {   b:  }                       {    a:   },    {   a:,    b:   }             
                        [   ]       [   ]                           [     ]         [   ]  [   ]                  
                          {}          {}                             1, {}            {}     {}             


            Base Queue
            
      |         {'a'}        |
      |           1          |
      |         {'a'}        |
      |       {'a','b'}      |
      |      [obj,[obj]      | 
      |                      |   

            Pattern Queue
      |                      |
      
      etc....
