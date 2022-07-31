# GobbledyGook

Gobbledy gook is a subset of schema that is sufficiently generalizable to the extent that we can apply the same method to it and always be doing something orderly, predictable, and useful.


## Itercursion
One of the methods used by Gobbledy Gook is something I call "intercursion". It's basically the same logic recursion and iteration use, without actually calling the function recursively, and without incrementing any index value.

Itercursion uses a sentinal value that follows rules that you specify based on its value


        //                                                                                                                  vvv                                      
        //  [                         1                                                0                                    ]     <---sentinel recognition
        //      {                   isStr:                  },  {                    isArr:                             }
        //          [         1                0         ]           [        1                  0                  ]                  
        //              {   isStr:  },  {   isArr:  }                   {   isStr:  },    {   isArr:,   isInt: }                     
        //                  [  0 ]          [  0 ]                          [  0 ]            [  0 ]    [  0 ]                        
        //                    {}              {}                              {}                {}        {}                       
        //
        //  

        //  [                         1                                                0                               vvv  ]   
        //      {                   isStr:                  },  {                    isArr:                              }  <---update sentinel value
        //          [         1                0         ]           [        1                  0                   ]                  
        //              {   isStr:  },  {   isArr:  }                   {   isStr:  },    {   isArr:,   isInt: }  
        //                  [  0 ]          [  0 ]                          [  0 ]            [  0 ]    [  0 ]                     
        //                    {}              {}                              {}                {}        {}                        
        //

 
        //  [                         1                                                0                                    ]   
        //      {                   isStr:                  },                                                              <--sentinel consumes key value, deletes object and collapses structure
        //          [         1                0         ]           [        1                  0                    ]                  
        //              {   isStr:  },  {   isArr:  }                   {   isStr:  },    {   isArr:,   isInt: }  
        //                  [  0 ]          [  0 ]                          [  0 ]            [  0 ]    [  0 ]                     
        //                    {}              {}                              {}                {}        {}                        
        //

        //                             1                                               0                                                                
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [         1                 0                      ]    
        //          [         1               0          ]              {   isStr:  },    {   isArr:,   isInt:   }          ^    
        //              {   isStr:  },  {   isArr:  }                       [  0 ]            [  0 ]    [  0 ]              | collapse
        //                  [  0 ]          [  0 ]                            {}                {}        {}                |
        //                    {}              {}                                                           
        //

        //                             1                                               0                                                                
        //  [                                                                                                         vvv   ]   
        //      {                   isStr:                  },      [         1                 0                      ]    <---sentinel recognition
        //          [         1               0          ]              {   isStr:  },    {   isArr:,   isInt:   }              
        //              {   isStr:  },  {   isArr:  }                       [  0 ]            [  0 ]    [  0 ]             
        //                  [  0 ]          [  0 ]                            {}                {}        {}               
        //                    {}              {}                                                           
        //

        //                             1                                               0                                                                
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [         1                 0        vvv           ]     <---update sentinel value  
        //          [         1               0          ]              {   isStr:  },    {   isArr:,   isInt:   }              
        //              {   isStr:  },  {   isArr:  }                       [  0 ]            [  0 ]    [  0 ]             
        //                  [  0 ]          [  0 ]                            {}                {}        {}               
        //                    {}              {}                                                           
        //



        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [          1                 0                   ]       
        //          [         1               0          ]               {   isStr:  },    {   isArr:           }    <---sentinel consumes key, deletes it from object    
        //              {   isStr:  },  {   isArr:  }                       [  0 ]            [  0 ]    [  0 ]                
        //                  [  0 ]          [  0 ]                            {}                {}        {}                        
        //                    {}              {}                                                           
        //

        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [          1                 0                   ]       
        //          [         1               0          ]               {   isStr:  },    {   isArr:       vvv }        
        //              {   isStr:  },  {   isArr:  }                       [  0 ]            [  0 ]    [    ]            <---sentinel recognition    
        //                  [  0 ]          [  0 ]                            {}                {}        {}                        
        //                    {}              {}                                                           
        //




        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [          1                 0                   ]       
        //          [         1               0          ]               {   isStr:  },    {   isArr:           }        
        //              {   isStr:  },  {   isArr:  }                       [  0 ]            [  0 ]    [ vvv]            <---update sentinel value    
        //                  [  0 ]          [  0 ]                            {}                {}        {}                        
        //                    {}              {}                                                           
        //


        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [          1                                     ]       
        //          [         1               0          ]               {   isStr:  },    {   isArr:             }        
        //              {   isStr:  },  {   isArr:  }                       [  0 ]            [  0 ]     [    ]                         
        //                  [  0 ]          [  0 ]                            {}                {}             <--- delete                  
        //                    {}              {}                                                           
        //

        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [          1                                         ]       
        //          [         1               0          ]               {   isStr:  },    {   isArr:             }        
        //              {   isStr:  },  {   isArr:  }                       [  0 ]            [  0 ]              <--- delete                     
        //                  [  0 ]          [  0 ]                            {}                {}                               
        //                    {}              {}                                                           
        //


        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [          1                                        ]       
        //          [         1               0          ]               {   isStr:  },     {   isArr:             }    <---nothing to collapse
        //              {   isStr:  },  {   isArr:  }                       [  0 ]              [ 0 ]                          
        //                  [  0 ]          [  0 ]                            {}                 {}                               
        //                    {}              {}                                                           
        //



        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [         1                   vvv                   ]    <---sentinel recognition   
        //          [         1               0         ]               {   isStr:  },        [ 0  ]                           
        //              {   isStr:  },  {   isArr:  }                       [  0 ]              {}               
        //                  [  0 ]          [  0 ]                            {}                                        
        //                    {}              {}                                                           
        //

        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [         1                 0                       ]       
        //          [                                   ]               {   isStr:  },        [ vvv]                    <---update sentinel value
        //              {   isStr:  },  {   isArr:  }                       [  0 ]              {}               
        //                  [ 0  ]          [  0 ]                            {}                                        
        //                    {}              {}                                                           
        //

        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [         1                 0                       ]       
        //          [         1               0         ]               {   isStr:  },        [    ]                      
        //              {   isStr:  },  {   isArr:  }                       [  0 ]                                      <---delete empty object (nothing for seninel to hold onto)
        //                  [ 0  ]          [ 0  ]                            {}                                        
        //                    {}              {}                                                           
        //

        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [         1                                         ]       
        //          [        1                0         ]               {   isStr:  }                                   <---delete empty array        
        //              {   isStr:  },  {   isArr:  }                       [  0 ]                            
        //                  [ 0  ]          [ 0  ]                            {}                                        
        //                    {}              {}                                                           
        //


        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [         1                 0                       ]       
        //          [        1                0          ]               {   isStr:  }                                  <---nothing to collapse            
        //              {   isStr:  },  {   isArr:  }                       [    ]                    
        //                  [    ]          [    ]                            {}                                        
        //                    {}              {}                                                           
        //

        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [         0     vvv                                 ]<---update sentinel value       
        //          [         1               0          ]               {   isStr:  }                                   
        //              {   isStr:  },  {   isArr:  }                       [ 0  ]                    
        //                  [ 0  ]          [ 0  ]                            {}                                        
        //                    {}              {}                                                           
        //

        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [         0                                        ]       
        //          [         1               0          ]                                                              <---delete (sentinel holds array of object)
        //              {   isStr:  },  {   isArr:  }                       [ 0  ]                    
        //                  [ 0  ]          [ 0  ]                            {}                                        
        //                    {}              {}                                                           
        //




        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [        0                                          ]       
        //          [         1               0          ]                 [ 0  ]                                       collapse empty array position with sentinel value                                                                                                          ^
        //              {   isStr:  },  {   isArr:  }                        {}                                         |
        //                  [ 0  ]          [ 0  ]                                                                      |
        //                    {}              {}                                                           
        //

        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [        0 vvv                                      ]       
        //          [         1               0          ]                 [ 0  ]                                       <---sentinel recognition                         
        //              {   isStr:  },  {   isArr:  }                        {}                   
        //                  [ 0  ]          [ 0  ]                                                                    
        //                    {}              {}                                                           
        //

        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [         0                                         ]       
        //          [         1               0          ]                 [ vvv]                                       <---update sentinel value                          
        //              {   isStr:  },  {   isArr:  }                        {}                   
        //                  [ 0  ]          [ 0  ]                                                                    
        //                    {}              {}                                                           
        //

        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [         0                                         ]       
        //          [         1               0          ]                 [    ]                                                                 
        //              {   isStr:  },  {   isArr:  }                           <---delete empty object                                              
        //                  [ 0  ]          [ 0  ]                                                                    
        //                    {}              {}                                                           
        //

        //                             1                                                   0                                                                  
        //  [                                                                                                               ]   
        //      {                   isStr:                  },      [                                                   ]       
        //          [         1               0          ]                                                              <---delete empty array                                
        //              {   isStr:  },  {   isArr:  }                                                                           
        //                  [ 0  ]          [ 0  ]                                                                    
        //                    {}              {}                                                           
        //

        //                             0                                                                                                                     
        //  [                                                                                                           ]   
        //      {                   isStr:                  }                                                           <---delete empty array
        //          [         1               0          ]                                                                                      
        //              {   isStr:  },  {   isArr:  }                                                                           
        //                  [ 0  ]          [ 0  ]                                                                    
        //                    {}              {}                                                           
        //


        //Basically, just repeat the same operations on this one
        //                             0                                                                                                                     
        //  [                                              vvv                                                             ]   
        //      {                   isStr:                  }                                                           <---update sentinel value
        //          [         1               0          ]                                                                                      
        //              {   isStr:  },  {   isArr:  }                                                                           
        //                  [ 0  ]          [ 0  ]                                                                    
        //                    {}              {}                                                           
        //
