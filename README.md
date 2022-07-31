# GobbledyGook

Gobbledy gook is a subset of schema that is sufficiently generalizable to the extent that we can apply the same method to it and always be doing something orderly, predictable, and useful.


## Itercursion
One of the methods used by Gobbledy Gook is something I call "intercursion". It's basically the same logic recursion and iteration use, without actually calling the function recursively, and without incrementing any index value. It recurses in place, and iterates in place, and because of that it can only be described as an iterator that removes objects using some sort of next() function. But you can virtualize the 'removal' process by holding some sort of data structure, making it act more like recursion.

Itercursion uses a sentinal value, and a container reference stack. The container reference stack preserves the last container that was used, and all the preceding containers that still have values. It removes containers references from the stack when they hold no value. The sentinel is most interested in returning values from inside the containers, but eventually needs to hold onto something when it consumes everything inside the container. It goes to the stack, evaluates whether its empty, if its not it loads the next value, if it is empty, it deletes the reference off the stack.
                                                                                                                         (S)
        //                                                                                                                |
        //                                                                                                                |
        //                                                                                                                v      sentinel returns object
        //  [                                                                                                             ]      after pushing it to the
        //      {                   isStr:                  },  {                    isArr:                             }        ref stack
        //          [                                  ]           [                                               ]                  
        //              {   isStr:  },  {   isArr:  }                   {   isStr:  },    {   isArr:,   isInt: }                     
        //                  [   ]          [   ]                          [   ]            [   ]    [   ]                        
        //                    {}             {}                             {}              {}        {}                       

        //   
        //| arr |
        // ^^^^^        
        

        //                                                                            (S)
        //                                                                             |                                 
        //                                                                             |                                 
        //  [                                                                          v                                  ]   
        //      {                   isStr:                  },  {                    isArr:                             }    sentinel returns object
        //          [                                  ]           [                                               ]         after pushing it to the ref
        //              {   isStr:  },  {   isArr:  }                   {   isStr:  },    {   isArr:,   isInt: }             stack
        //                  [   ]          [   ]                          [   ]            [   ]    [   ]                     
        //                    {}             {}                             {}               {}       {}                        
        //
        
        

        //| obj |
        //| arr |
        // ^^^^^   


        //
        //                                                                                                        (S)       
        //                                                                                                         |      
        //  [                                                                                                      |      ]   
        //      {                   isStr:                  },  {                    isArr:                        v    }    sentinel returns arr
        //          [                                  ]           [                                               ]         after pushing it to the       
        //              {   isStr:  },  {   isArr:  }                   {   isStr:  },    {   isArr:,   isInt: }             ref stack
        //                  [   ]          [   ]                          [   ]            [   ]    [   ]                     
        //                    {}             {}                             {}               {}       {}                        
        //
        
        
        //| arr |
        //| obj |
        //| arr |
        // ^^^^^   



        //
        //                                                                                                               
        //                                                                                                    (S)           
        //  [                                                                                                  |          ]   
        //      {                   isStr:                  },  {                    isArr:                    |        }    sentinel returns object
        //          [                                  ]           [                                           v   ]         after pushing it to the       
        //              {   isStr:  },  {   isArr:  }                   {   isStr:  },    {   isArr:,   isInt: }             ref stack
        //                  [   ]          [   ]                          [   ]            [   ]    [   ]                     
        //                    {}             {}                             {}               {}       {}                        
        //
        
        //| obj | 
        //| arr |
        //| obj |
        //| arr |
        // ^^^^^   


        //
        //                                                                                                               
        //                                                                                               (S)                
        //  [                                                                                             |               ]   
        //      {                   isStr:                  },  {                    isArr:               |             }    sentinel creates and returns
        //          [                                  ]           [                                      v        ]         obj with single key pushing 
        //              {   isStr:  },  {   isArr:  }                   {   isStr:  },    {   isArr:,   isInt: }             isInt obj to ref stack
        //                  [   ]          [   ]                            [   ]             [   ]     [   ]                     
        //                    {}             {}                              {}                 {}       {}                        
        //

        //| obj |
        //| obj | 
        //| arr |
        //| obj |
        //| arr |
        // ^^^^

        //
        //                                                                                                               
        //                                                                                                               
        //  [                                                                                                             ]   
        //      {                   isStr:                  },  {                    isArr:                             }    sentinel pushes then returns
        //          [                                  ]           [                                               ]         array
        //              {   isStr:  },  {   isArr:  }                   {   isStr:  },    {   isArr:,   isInt: }             
        //                  [   ]          [   ]                            [   ]             [   ]     [   ]<---(S)                     
        //                    {}             {}                              {}                 {}       {}                        
        //

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
        //  [                                                                                                             ]   
        //      {                   isStr:                  },  {                    isArr:                             }    sentinel pushes then returns
        //          [                                  ]           [                                               ]         obj
        //              {   isStr:  },  {   isArr:  }                   {   isStr:  },    {   isArr:,   isInt: }             
        //                  [   ]          [   ]                            [   ]             [   ]     [   ]                     
        //                    {}             {}                              {}                 {}       {}  <---(S)                      
        //

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
        //  [                                                                                                             ]   
        //      {                   isStr:                  },  {                    isArr:                             }    sentinel find no container
        //          [                                  ]           [                                               ]         or raw value, returns null
        //              {   isStr:  },  {   isArr:  }                   {   isStr:  },    {   isArr:,   isInt: }             and pops last ref off stack
        //                  [   ]          [   ]                            [   ]             [   ]     [   ]                and deletes that item from  
        //                    {}             {}                              {}                 {}          <---(S)         the top of the updated ref
        //                                                                                                                   stack


        //| arr |
        //| obj |
        //| obj | 
        //| arr |
        //| obj |
        //| arr |
        // ^^^^
