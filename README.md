# Gibberish

Gibberish is the subset of schema that is sufficiently generalizable to the extent that we can apply the same methods to it and always be doing something orderly, predictable, and useful with Gibberish utilities.

Gibberish is based around a "path" and "strata" abstractions associated with a subset of schema that is general enough to almost do anything whatsoever with theoretically slightly more computational cost in terms of complexity. 

This is the path algorithm used by Gibberish library:

      paths(schema, pk, path=[], _paths=[]){

        if(Array.isArray(schema)){
          for(var i=0; i<schema.length; i++){
            var val=schema[i];
            if(Array.isArray(val)){
              //push index to path
              var _path = path.slice()
              _path.push(i)
              this.paths(val, pk, _path, _paths)
            }else if(typeof val === 'object'){
              var _path = path.slice()
              _path.push(i)
              this.paths(val, pk, _path, _paths)
            }else{
              path = path.slice()
              path.push({[i]:val})
            }
          }

        }else if(typeof schema === 'object'){
          for(var i=0; i<Object.keys(schema).length; i++){
            var key = Object.keys(schema)[i];
            var val = schema[key]
            if(pk.includes(key)){
              path.push({[key]:val})
            }else{
              var _path = path.slice()
              _path.push(key)
              this.paths(val, pk, _path, _paths)
            }
          }
        }else{
          //base case
          path.push({"base":schema})
          _paths.push(path)
          return
        }
        return _paths
      }
